import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactUs } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: ContactUs;
  title = '';
  visualisation = false;
  // users = this.uow.users.get();


  folderToSaveInServer = 'contactUss';

  /*{imagesInit}*/



  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.folderToSaveInServer = this.folderToSaveInServer + '_' + this.o.id;
    this.title = 'Par ' + this.o.user.nom;
    this.visualisation = this.data.visualisation;
    this.createForm();
    if (this.o.id !== 0) {

      setTimeout(() => this.createForm(), 300);
    }

  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: ContactUs): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.contactUss.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.contactUss.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
object: [this.o.object, [Validators.required, ]],
msg: [this.o.msg, [Validators.required, ]],
date: [this.o.date, [Validators.required, ]],
idUser: [this.o.idUser, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new ContactUs();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
