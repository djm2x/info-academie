import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {
  now = new Date();
  @Input() name = 'Date';
  @Input() property = new FormControl(this.now);
  @Output() dateChange = new Subject<Date>();
  date = new FormControl(this.now);
  time = new FormControl(this.now.getHours() + ':' + this.now.getMinutes());

  constructor() { }

  ngOnInit(): void {
    merge(...[this.date.valueChanges, this.time.valueChanges]).subscribe(r => {

      this.now = new Date(this.date.value.getFullYear(), this.date.value.getMonth(), this.date.value.getDate()
        , ...this.time.value.split(':'));

      this.now.setTime(this.now.getTime() + this.now.getTimezoneOffset() * 60 * 1000);

      this.now.setHours(this.now.getHours() + 1);

      this.dateChange.next(this.now);
    });
  }

}
