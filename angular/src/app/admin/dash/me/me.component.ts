import { Component, OnInit } from '@angular/core';
import { Prof, Student, User } from 'src/app/models/models';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  user = new User();
  student = new Student();
  prof = new Prof();
  constructor(public session: SessionService) { }

  ngOnInit(): void {
    this.user = this.session.user;
    if (this.session.isProf) {
      this.prof = this.session.prof;
    } else if (this.session.isStudent){
      this.student = this.session.student;
    }
  }

}
