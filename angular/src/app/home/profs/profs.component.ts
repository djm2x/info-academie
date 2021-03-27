import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Prof } from 'src/app/models/models';
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
  activites = this.uow.activites.get();

  prof = new FormControl('');
  idTypeCours = new FormControl(0);
  idNiveauScolaires = new FormControl(0);

  queryParams: Params;

  count = 0;
  list: Prof[] = [];

  constructor(private route: ActivatedRoute, private uow: UowService
    , public myTrans: MyTranslateService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      // .filter(params => params.order)
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.queryParams = params;
        // this.order = params.order;
        // console.log(this.order); // popular
      });
  }

  submit() {
    this.queryParams['startIndex'] = 0;
    this.queryParams.pageSize = 10;
    // this.queryParams.typeActivite = 0;
    // this.queryParams.activite = 0
    // this.queryParams.lieuCours = 0
    // this.queryParams.ville = 0
    this.queryParams.typeCours = this.idTypeCours.value;
    this.queryParams.niveauScolaire = this.idNiveauScolaires.value;
    this.queryParams.prof = this.prof.value;

    this.router.navigate(['/home/profs'], { queryParams: this.queryParams, queryParamsHandling: 'merge' });
  }

}
