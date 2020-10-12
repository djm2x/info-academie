import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Video;
  title = '';
  visualisation = false;


  folderToSaveInServer = 'videos';

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

  onOkClick(o: Video): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.videos.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.videos.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
title: [this.o.title, [Validators.required, ]],
order: [this.o.order, [Validators.required, ]],
description: [this.o.description, [Validators.required, ]],
date: [this.o.date, [Validators.required, ]],
urlVideo: [this.o.urlVideo, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new Video();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
