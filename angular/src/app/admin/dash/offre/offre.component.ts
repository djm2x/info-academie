import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NiveauScolaire, OffreProf } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {

  offresProfs: OffreProf[] = [];
  offresStudents: { name: string, list: { name: string, value: number }[] }[] = [];
  offreStudentsDescription = this.uow.offres;
  month = this.uow.monthsAlpha[new Date().getMonth()].name;

  constructor(public uow: UowService, public session: SessionService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOffresProf();
    this.getOffresStudents();
  }

  getOffresProf() {
    this.uow.offreProfs.getAll2().subscribe(r => {
      // console.log(r)
      this.offresProfs = r;
    });
  }

  getOffresStudents() {
    const names = ['1ére Primaire', '2éme Primaire', '3éme Primaire', '4éme Primaire', '5éme Primaire', '6éme Primaire', '1ére Collège', '2éme Collège', '3éme Collège', 'Tronc commun', '1ére Bac', '2éme Bac',];

    this.uow.niveauScolaires.get().subscribe(r => {
      console.log(r)
      this.offresStudents = [
        { name: 'Cours à domicile individuel', list: r.map((e, i) => ({ name: names[i], value: e.coursDomicileIndividuel })) },
        { name: 'Cours à domicile groupe « 3 personnes » ', list: r.map((e, i) => ({ name: names[i], value: e.coursDomicileGroupe })) },
        { name: 'Cours en ligne individuel', list: r.map((e, i) => ({ name: names[i], value: e.coursLigneIndividuel })) },
        { name: 'Cours en ligne groupe « 3 personnes »', list: r.map((e, i) => ({ name: names[i], value: e.coursLigneGroupe })) },
      ];
    });

  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1100px',
      disableClose: false,
      data: {
        list: this.offresStudents,
        id,
        title: `Pack d’une séance`,
        subTitle: `« 1h30 dans la séance » / Prix en « DHS »`,
      }
    });

    return dialogRef.afterClosed();
  }

}
