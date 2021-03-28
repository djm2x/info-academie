import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite, LieuCours, NiveauScolaire, Prof, TypeActivite, TypeCours } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  e = new Prof();
  typeActivites: TypeActivite[] = [];
  activites: Activite[] = [];
  typeCours: TypeCours[] = [];
  lieuCours: LieuCours[] = [];
  niveauScolaires: NiveauScolaire[] = [];
  constructor(private route: ActivatedRoute, private uow: UowService
    , public myTrans: MyTranslateService, private router: Router) { }

  ngOnInit(): void {
    const nameId = this.route.snapshot.paramMap.get('name-id');
    const id = +nameId.split('-').pop();

    if (isNaN(id)) {
      this.router.navigate(['/home/profs']);
      return;
    }

    this.uow.home.prof(id).subscribe(r => {
      this.e = r.model;

      this.typeActivites = r.typeActivites;
      this.activites = r.activites;
      this.typeCours = r.typeCours;
      this.lieuCours = r.lieuCours;
      this.niveauScolaires = r.niveauScolaires;
    });
  }

  chipsSelect(p: {[key: string]: string | number}) {
    this.router.navigate(['/home/profs'], { queryParams: p, queryParamsHandling: 'merge' });
  }

}
