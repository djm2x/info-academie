import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { EventProf } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

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
  handleEvents = new Subject<EventProf>();
  update = new Subject<Date>();

  selectedDate = new Date();

  constructor(private fb: FormBuilder, private uow: UowService, public session: SessionService) { }

  ngOnInit(): void {
    this.createForm();

    const sub = merge(...[this.dateChange, this.update]).pipe(startWith(null as Date)).subscribe(r => {
      this.selectedDate = r ? r : new Date();

      console.log(this.selectedDate);

      const year = this.selectedDate.getFullYear();
      const month = this.selectedDate.getMonth() + 1;

      this.getAll(year, month);
    });
  }

  getAll(year, month) {
    this.uow.eventProfs.getByYearMonth(year, month, this.session.user.id).subscribe(r => {
      console.log(r);
      this.list = r;
      setTimeout(() => this.myEvents.next(this.list), 100);
    });
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      title: [this.o.title, [Validators.required,]],
      start: [this.o.start, [Validators.required,]],
      end: [this.o.end, [Validators.required,]],
      color: [this.o.color],
      draggable: [this.o.draggable, [Validators.required,]],
      resizable: [this.o.resizable],
      month: [this.o.month, [Validators.required,]],
      year: [this.o.year, [Validators.required,]],
      idUser: [this.session.user.id, [Validators.required,]],
    });
  }

  resetForm() {
    this.o = new EventProf();
    this.createForm();
  }

  submit(o: EventProf) {
    let sub = null;
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
}


