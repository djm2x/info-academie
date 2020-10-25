import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventProf } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: EventProf;
  title = '';
  visualisation = false;
  users = this.uow.users.get();

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

  onOkClick(o: EventProf): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.eventProfs.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.eventProfs.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
title: [this.o.title, [Validators.required, ]],
start: [this.o.start, [Validators.required, ]],
end: [this.o.end, [Validators.required, ]],
color: [this.o.color, [Validators.required, ]],
draggable: [this.o.draggable, [Validators.required, ]],
resizable: [this.o.resizable, [Validators.required, ]],
month: [this.o.month, [Validators.required, ]],
year: [this.o.year, [Validators.required, ]],
idUser: [this.o.idUser, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new EventProf();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
