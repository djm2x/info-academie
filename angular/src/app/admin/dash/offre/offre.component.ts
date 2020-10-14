import { Component, OnInit } from '@angular/core';
import { OffreProf } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  offresProfs: OffreProf[] = [];
  month = this.uow.monthsAlpha[new Date().getMonth()].name;
  constructor(public uow: UowService, public session: SessionService) { }

  ngOnInit(): void {
    this.getOffresProf();
  }

  getOffresProf() {
    this.uow.offreProfs.getAll2().subscribe(r => {
      console.log(r)
      this.offresProfs = r;
    });
  }

}
