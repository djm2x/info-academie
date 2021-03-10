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
export class ContactsComponent implements OnInit, OnDestroy {
  list: Discussion[] = [];
  update = new Subject();
  @Input() info = new Subject();
  subs: Subscription[] = [];
  idSelected = -1;
  constructor(public uow: UowService, protected session: SessionService) { }

  ngOnInit(): void {
    const sub = merge(...[this.update]).pipe(startWith(null as any)).subscribe(r => {

      this.getContacts(this.session.user.id);
    });

    this.subs.push(sub);

  }

  selectedUser(e: User) {
    console.log(e);

    const d = new Discussion();
    d.idMe = this.session.user.id;
    d.me = this.session.user;
    d.idOtherUser = e.id;
    d.otherUser = e;

    this.list.unshift(d);

    this.selectUser(d);
  }

  selectUser(e: Discussion) {
    if (this.idSelected === e.id) {
      return;
    }

    this.idSelected = e.id;

    let me, otherUser;

    if (+e.idMe === +this.session.user.id) {
      me = e.me;
      otherUser = e.otherUser;
    } else {
      me = e.otherUser;
      otherUser = e.me;
    }

    this.info.next({
      idDiscussion: e.id,
      me,
      otherUser,
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
      return e.otherUser;
    } else {
      return e.me;
    }
  }

  async delete(e: Discussion) {
    // const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    // if (r === 'ok') {
    const sub = this.uow.discussions.delete(e.id).subscribe(() => {

      const i = this.list.findIndex(o => o.id === e.id);
      if (i > -1) {
        this.list.splice(i, 1);
      }
      // this.update.next(true);
    } );

    this.subs.push(sub);
    // }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }
}
