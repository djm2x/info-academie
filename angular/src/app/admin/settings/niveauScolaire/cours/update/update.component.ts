import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cours } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update-cours',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateCoursComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Cours;
  title = '';
  visualisation = false;
  niveauScolaires = this.uow.niveauScolaires.get();


  folderToSaveInServer = 'cours';

  /*{imagesInit}*/



  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Cours): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.cours.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.cours.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      nom: [this.o.nom, [Validators.required,]],
      nomAr: [this.o.nomAr, [Validators.required,]],
      filesUrl: [this.o.filesUrl, [Validators.required,]],
      vidoesUrl: [this.o.vidoesUrl, [Validators.required,]],
      idNiveauScolaire: [this.o.idNiveauScolaire, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new Cours();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
