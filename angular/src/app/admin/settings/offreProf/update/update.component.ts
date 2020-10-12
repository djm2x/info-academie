import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffreProf } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: OffreProf;
  title = '';
  visualisation = false;
  typeCourss = this.uow.typeCours.get();


  folderToSaveInServer = 'offreProfs';

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

  onOkClick(o: OffreProf): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.offreProfs.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.offreProfs.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      interval: [this.o.interval, [Validators.required,]],
      value: [this.o.value, [Validators.required,]],
      idTypeCours: [+this.o.idTypeCours, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new OffreProf();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
