import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MyEvent } from 'src/app/models/models';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {
  myForm: FormGroup;
  o = new MyEvent();
  list: MyEvent[] = [];
  myEvent = new Subject();
  myEvents = new Subject();

  colors = [
    { name: 'red', value : { primary: '#ad2121', secondary: '#FAE3E3' } },
    { name: 'blue', value : { primary: '#1e90ff', secondary: '#D1E8FF' } },
    { name: 'yellow', value : { primary: '#e3bc08', secondary: '#FDF1BA' } },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();


    setTimeout(() => {
      this.myEvents.next(this.list);
    }, 100);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      start: [this.o.start, [Validators.required,]],
      end: [this.o.end, [Validators.required,]],
      title: [this.o.title, [Validators.required,]],
    });
  }

  resetForm() {
    this.o = new MyEvent();
    this.createForm();
  }

  submit(o: MyEvent) {
    console.log(o);

    //post

    //put

    this.myEvent.next(o);
  }
}


