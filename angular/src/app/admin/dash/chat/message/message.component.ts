import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Discussion, Message } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { ChatHubService } from '../chat.hub.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;
  @Input() discussion = new Subject<Discussion>();

  list: Message[] = [];
  discussionObj = new Discussion();
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
    const sub = merge(...[this.discussion]).subscribe(r => {
      this.discussionObj = r;
      this.getContacts(r.id);
      this.createForm();
      this.createFormMessage();
    });

    this.subs.push(sub);



  }

  getContacts(idDiscussion) {
    this.uow.messages.getMessages(idDiscussion).subscribe(r => {
      console.log(r)
      this.list = r;
    });
  }

  isYou(id) {
    return +id === +this.session.user.id;
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
      id: [this.discussionObj.id, [Validators.required,]],
      unReaded: [this.discussionObj.unReaded, [Validators.required,]],
      date: [this.discussionObj.date, [Validators.required,]],
      idMe: [this.discussionObj.idMe, [Validators.required,]],
      idOtherUser: [this.discussionObj.idOtherUser, [Validators.required,]],
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
      otherUserName: [this.discussionObj.otheruser.nom + ' ' + this.discussionObj.otheruser.prenom, [Validators.required,]],
      otherUserImage: [this.discussionObj.otheruser.imageUrl, [Validators.required,]],
      idMe: [this.discussionObj.idMe, [Validators.required,]],
      idOtherUser: [this.discussionObj.idOtherUser, [Validators.required,]],
      idDiscussion: [this.discussionObj.id, [Validators.required,]],
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
