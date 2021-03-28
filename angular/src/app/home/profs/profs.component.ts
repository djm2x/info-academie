import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Activite, Prof } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.scss']
})
export class ProfsComponent implements OnInit {
  typeCours = this.uow.typeCours.get();
  niveauScolaires = this.uow.niveauScolaires.get();
  activites: Activite[] = [];

  prof = new FormControl('');
  idTypeCours = new FormControl(0);
  idNiveauScolaires = new FormControl(0);

  queryParams: Params;

  count = 0;
  list: Prof[] = [];

  constructor(private route: ActivatedRoute, private uow: UowService
    , public myTrans: MyTranslateService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.idTypeCours.setValue(params.typeCours ? +params.typeCours : 0);
      this.idNiveauScolaires.setValue(params.niveauScolaire ? +params.niveauScolaire : 0);
      this.prof.setValue(params.prof ?? '');

      this.queryParams = {
        startIndex: params.startIndex ?? 0,
        pageSize: params.pageSize ?? 10,
        // typeActivite :0;
        activite: params.activite ?? 0,
        // lieuCours :0
        ville: params.ville ?? 0,
        typeCours: this.idTypeCours.value,
        niveauScolaire: this.idNiveauScolaires.value,
        prof: this.prof.value,
      };

      console.log(this.queryParams);

      this.get(this.queryParams);
    });

    this.uow.activites.get().subscribe(r => {
      this.activites = r;
    });
  }

  submit() {
    this.queryParams = {
      // startIndex: 0,
      // pageSize: 10,
      // // typeActivite :0;
      // activite: this.queryParams.activite,
      // // lieuCours :0
      // ville: this.queryParams.ville,
      typeCours: this.idTypeCours.value,
      niveauScolaire: this.idNiveauScolaires.value,
      prof: this.prof.value,
    }

    this.router.navigate(['/home/profs'], { queryParams: this.queryParams, queryParamsHandling: 'merge' });

    // this.get(this.queryParams);
  }

  activiteChange(idActivite: number) {
    this.router.navigate(['/home/profs'], { queryParams: {activite: idActivite}, queryParamsHandling: 'merge' });
  }

  reset() {
    this.queryParams = {
      typeCours: 0,
      niveauScolaire: 0,
      activite: 0,
      prof: '',
    }

    this.router.navigate(['/home/profs'], { queryParams: this.queryParams, queryParamsHandling: 'merge' });
  }

  get(queryParams: { [key: string]: any }) {
    this.uow.home.searchProfs(queryParams).subscribe(r => {
      console.log(r)
      this.list = r.list;
      this.count = r.count;
    });
  }

}
