import { Injectable } from '@angular/core';
import { SyntheseComponent } from './synthese.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SyntheseService {

  constructor(public dialog: MatDialog) { }

  openDialog(model: string) {
    const dialogRef = this.dialog.open(SyntheseComponent, {
      width: '1100px',
      disableClose: true,
      data: { model }
    });

    return dialogRef.afterClosed();
  }
}
