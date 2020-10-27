import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/app/models/models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() selectedUser = new Subject<Message>();
  constructor() { }

  ngOnInit(): void {
  }

}
