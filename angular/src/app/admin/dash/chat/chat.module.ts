import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessageComponent } from './message/message.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ChatComponent, ContactsComponent, MessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class ChatModule { }
