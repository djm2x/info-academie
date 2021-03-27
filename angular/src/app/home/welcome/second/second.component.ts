import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Activite, Ville, Prof } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Input() dataSource = new Subject<{
    // videos: Video[],
    activites: Activite[],
    villes: Ville[],
    // profs: Prof[],
  }>();

  activites: Activite[] = [];
  villes: Ville[] = [];

  idActivite = new FormControl(0);
  idVille = new FormControl(0);
  constructor(public myTrans: MyTranslateService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource.subscribe(r => {
      this.activites = r.activites;
      this.villes = r.villes;
    });
  }

  submit(idActivite,idVille ) {
    this.router.navigate(['/home/profs'], { queryParams: { activite: idActivite, ville: idVille }, queryParamsHandling: 'merge' });
  }

}
