import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Discussion, User } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy  {
  list: Discussion[] = [];
  update = new Subject();
  @Input() info = new Subject();
  subs: Subscription[] = [];
  idSelected = 0;
  constructor(private uow: UowService, protected session: SessionService) { }

  ngOnInit(): void {
    const sub = merge(...[this.update]).pipe(startWith(null as any)).subscribe(r => {

      this.getContacts(this.session.user.id);
    });

    this.subs.push(sub);

  }

  selectUser(e: Discussion) {
    if (this.idSelected === e.id) {
      return;
    }

    this.idSelected = e.id;

    let me, otheruser;

    if (+e.idMe === +this.session.user.id) {
      me = e.me;
      otheruser = e.otheruser;
    } else {
      me = e.otheruser;
      otheruser = e.me;
    }

    this.info.next({
      idDiscussion: e.id,
      me,
      otheruser,
    });
  }

  getContacts(idUser) {
    this.uow.discussions.getContacts(idUser).subscribe(r => {
      console.log(r)
      this.list = r;
    });
  }

  other(e: Discussion): User {
    if (+e.idMe === +this.session.user.id) {
      return e.otheruser;
    } else {
      return e.me;
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }
}
