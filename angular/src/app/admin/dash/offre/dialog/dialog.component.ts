import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UowService } from 'src/app/services/uow.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  title = '';
  subTitle = '';
  offresStudents: { name: string, list: { name: string, value: number }[] }[] = [];
  subs: Subscription[] = [];
  packs = [{ id: 1, name: 'une scéance' }, { id: 2, name: 'mois' }, { id: 3, name: 'semestre' }];
  fc = new FormControl(1);
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private uow: UowService) { }

  ngOnInit() {
    this.offresStudents = this.data.list;
    this.title = this.data.title;
    this.subTitle = this.data.subTitle;
  }

  selectChange(id: number) {
    // this.offresStudents.forEach((e, i) => {
    //   e.list.forEach(l => {
    //     l.value *= 100;
    //   })
    // })
  }

  compute(value: number, coef: number) {
    const s = value * (coef === 2 ? 4 : (coef === 3 ? 10.8 : 1));
    return s.toFixed(0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: any): void {
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

