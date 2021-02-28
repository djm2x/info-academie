import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Message;
  title = '';
  visualisation = false;
  users = this.uow.users.get();
  receivers = this.uow.users.get();
  // courss = this.uow.courss.get();


  folderToSaveInServer = 'messages';

  /*{imagesInit}*/



  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.folderToSaveInServer = this.folderToSaveInServer + '_' + this.o.id;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();
    if (this.o.id !== 0) {

      setTimeout(() => this.createForm(), 300);
    }

  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Message): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.messages.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.messages.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      object: [this.o.object, [Validators.required,]],
      message: [this.o.content, [Validators.required,]],
      vu: [this.o.vu, [Validators.required,]],
      date: [this.o.date, [Validators.required,]],
      idCours: [this.o.idCours, [Validators.required,]],
      otherUserName: [this.o.otherUserName, [Validators.required,]],
      idMe: [this.o.idMe, [Validators.required,]],
      idOtherUser: [this.o.idOtherUser, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new Message();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
