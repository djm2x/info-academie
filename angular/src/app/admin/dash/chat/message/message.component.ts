import { AfterViewChecked, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Discussion, Message, User } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { ChatHubService } from '../chat.hub.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;
  @Input() info = new Subject<{ idDiscussion: number, me: User, otheruser: User }>();

  list: Message[] = [];
  discussion = new Discussion();
  o = new Message();
  update = new Subject();
  subs: Subscription[] = [];

  myForm: FormGroup;
  myFormMessage: FormGroup;


  constructor(private uow: UowService, public session: SessionService
    , private chat: ChatHubService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.createFormMessage();
    const sub = merge(...[this.info]).pipe(startWith(null as any)).subscribe(r => {
      console.log(r);

      try {
        r = r ? r : JSON.parse(atob(localStorage.getItem('selectedUser'))) ;
      } catch (e) { }

      if (r) {
        localStorage.setItem('selectedUser', btoa(JSON.stringify(r)));
        this.discussion.id = r.idDiscussion;
        this.discussion.idMe = r.me.id;
        this.discussion.idOtherUser = r.otheruser.id;
        this.discussion.me = r.me;
        this.discussion.otheruser = r.otheruser;

        this.getContacts(r.idDiscussion);
        this.createForm();
        this.createFormMessage();
      }

    });

    this.subs.push(sub);


    this.scrollToBottom();

    this.chat.newMessage.subscribe(r => {
      console.log(r);
      this.list.push(r);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getContacts(idDiscussion) {
    this.uow.messages.getMessages(idDiscussion).subscribe(r => {
      console.log(r)
      this.list = r;
    });
  }

  isYou(id) {
    // return true;
    return +id === +this.session.user.id;
  }

  nameUser(e: Message) {
    // console.log(e)
    if (+e.idMe === +this.session.user.id) {
      return `${this.session.user.nom} ${this.session.user.prenom} ${e.idMe} == ${+this.session.user.id}`;
    } else {
      return e.otherUserName;
      return e.otheruser.nom + ' ' + e.otheruser.prenom;
    }
    // return e.otheruser.nom + ' ' + e.otheruser.prenom;
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  displayName(u: any) {
    return u.userName !== '' ? u.userName : u.email.substring(0, u.email.indexOf('@'));
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

  // formulaire
  createForm() {
    this.myForm = this.fb.group({
      id: [this.discussion.id, [Validators.required,]],
      unReaded: [this.discussion.unReaded, [Validators.required,]],
      date: [this.discussion.date, [Validators.required,]],
      idMe: [this.discussion.idMe, [Validators.required,]],
      idOtherUser: [this.discussion.idOtherUser, [Validators.required,]],
    });
  }

  createFormMessage() {
    this.myFormMessage = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      object: [this.o.object, [Validators.required,]],
      message: [this.o.message, [Validators.required,]],
      vu: [this.o.vu, [Validators.required,]],
      date: [this.o.date, [Validators.required,]],
      idCours: [this.o.idCours, [Validators.required,]],
      otherUserName: [this.discussion.me.nom + ' ' + this.discussion.me.prenom, [Validators.required,]],
      otherUserImage: [this.discussion.me.imageUrl, [Validators.required,]],
      idMe: [this.discussion.idMe, [Validators.required,]],
      idOtherUser: [this.discussion.idOtherUser, [Validators.required,]],
      idDiscussion: [this.discussion.id, [Validators.required,]],
    });
  }

  send(o: Message) {
    console.log(o);
    // o.idCollaboratteur = this.o.idCollaborateur;
    this.uow.messages.postMessage(o).subscribe(r => {
      console.log(r);
      this.list.push(o);
      // this.myFormMessage.get('message').patchValue('');
    });
  }

}
