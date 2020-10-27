import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Message } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy  {
  list: Message[] = [];
  update = new Subject();
  @Input() selectedUser = new Subject();
  subs: Subscription[] = [];
  constructor(private uow: UowService, protected session: SessionService) { }

  ngOnInit(): void {
    const sub = merge(...[this.update]).pipe(startWith(null as any)).subscribe(r => {

      this.getMessages(this.session.user.id);
    });

    this.subs.push(sub);

  }

  getMessages(idUser) {
    this.uow.messages.getMessages(idUser).subscribe(r => {
      console.log(r)
      this.list = r;
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }
}
