import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { EventProf } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {
  subs: Subscription[] = [];
  myForm: FormGroup;
  o = new EventProf();
  list: EventProf[] = [];
  myEvent = new Subject();
  myEvents = new Subject();

  colors = [
    { name: 'red', value: { primary: '#ad2121', secondary: '#FAE3E3' } },
    { name: 'blue', value: { primary: '#1e90ff', secondary: '#D1E8FF' } },
    { name: 'yellow', value: { primary: '#e3bc08', secondary: '#FDF1BA' } },
  ];

  dateChange = new Subject<Date>();
  handleEvents = new Subject<{ o: EventProf, action: string }>();
  update = new Subject<Date>();

  selectedDate = new Date();

  constructor(private fb: FormBuilder, private uow: UowService, public dialog: MatDialog
    , public session: SessionService, private mydialog: DeleteService) { }

  ngOnInit(): void {
    // this.createForm();

    const sub = merge(...[this.dateChange, this.update]).pipe(startWith(null as Date)).subscribe(r => {
      this.selectedDate = r ? r : new Date();

      console.log(this.selectedDate);

      const year = this.selectedDate.getFullYear();
      const month = this.selectedDate.getMonth() + 1;

      this.getAll(year, month);
    });

    this.handleEvents.subscribe(r => {
      console.log(r);

      if (r.action === 'edit') {

        this.o.id = +r.o.id;
        this.o.title = r.o.title;
        this.o.start = r.o.start;
        this.o.end = r.o.end;
        this.o.year = r.o.start.getFullYear();
        this.o.month = r.o.start.getMonth() + 1;
        this.o.idUser = +r.o.idUser;

        console.log(this.o.start, this.o.end);

        this.edit(this.o);

      } else if (r.action === 'delete') {
        this.delete(r.o.id);
      } else if (r.action === 'add') {
        this.add();
      }


    });
  }

  getAll(year, month) {
    this.uow.eventProfs.getByYearMonth(year, month, this.session.user.id).subscribe(r => {
      console.log(r);
      this.list = r;
      setTimeout(() => this.myEvents.next(this.list), 100);
    });
  }

  // createForm() {
  //   this.myForm = this.fb.group({
  //     id: [this.o.id, [Validators.required,]],
  //     title: [this.o.title, [Validators.required,]],
  //     start: [this.o.start, [Validators.required,]],
  //     end: [this.o.end, [Validators.required,]],
  //     color: [this.o.color],
  //     draggable: [this.o.draggable, [Validators.required,]],
  //     resizable: [this.o.resizable],
  //     month: [this.o.month, [Validators.required,]],
  //     year: [this.o.year, [Validators.required,]],
  //     idUser: [this.session.user.id, [Validators.required,]],
  //   });
  // }

  // resetForm() {
  //   this.o = new EventProf();
  //   this.createForm();
  // }

  openDialog(o: EventProf, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    const o = new EventProf();
    o.idUser = this.session.user.id;
    this.openDialog(o, `Ajouter Evenemnt`, false).subscribe(result => {
      if (result) {
        this.update.next(this.selectedDate);
      }
    });
  }

  edit(o: EventProf) {
    o.idUser = this.session.user.id;
    this.openDialog(o, `Modifier Evenemnt`, false).subscribe((result: EventProf) => {
      if (result) {
        this.update.next(this.selectedDate);
      }
    });
  }

  submit(o: EventProf) {
    let sub = null;
    console.log(o);
    if (o.id === 0) {
      sub = this.uow.eventProfs.post(o).subscribe(r => {
        this.update.next(this.selectedDate);
      });
    } else {
      sub = this.uow.eventProfs.put(o.id, o).subscribe(r => {
        this.update.next(this.selectedDate);
      });
    }

    this.subs.push(sub);
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog('Evenement').toPromise();
    if (r === 'ok') {
      const sub = this.uow.eventProfs.delete(id).subscribe(_ => {
        this.update.next(this.selectedDate);
      });
      this.subs.push(sub);
    }
  }
}


