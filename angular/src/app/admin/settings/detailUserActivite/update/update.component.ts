import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailUserActivite } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: DetailUserActivite;
  title = '';
  visualisation = false;
  users = this.uow.users.get();
activites = this.uow.activites.get();


  folderToSaveInServer = 'detailUserActivites';

  /*{imagesInit}*/

  

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.folderToSaveInServer = this.folderToSaveInServer + '_' + this.o.id;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();
    
    /*{imagesFrom}*/

    setTimeout(() => {
       /*{imagesTo}*/
    }, 100);
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: DetailUserActivite): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.detailUserActivites.post(o).subscribe(r => {
        
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.detailUserActivites.put(o.id, o).subscribe(r => {
        
        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
date: [this.o.date, [Validators.required, ]],
idUser: [this.o.idUser, [Validators.required, ]],
idActivite: [this.o.idActivite, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new DetailUserActivite();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
