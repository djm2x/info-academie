import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message',
  template: `
    <div class="dialog p-2">
        <div mat-dialog-content>
          <p> Description : {{model.error?.Description}} </p>
          <hr>
          <p> Message : {{model.error?.Message}} </p>
          <hr>
          <p> Mini stackTrace : {{stackTraceFilter(model.error?.StackTrace)}} </p>
          <hr>
          <p> Message server : {{model.message}} </p>
        </div>
    </div>
  `,
  styles: [`p {font-weight: bold; line-height: 2.5;}`]
})
export class DialogMessageComponent implements OnInit {

  model: HttpErrorResponse = null;
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.model = this.data.model;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close('ok');
  }

  stackTraceFilter(e: string) {
    const i = e?.indexOf('.cs:line');

    return `.....${e?.substring(i - 100, i + 100)}.....`
  }

}

