import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Message } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends SuperService<Message> {

  constructor() {
    super('messages');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, object, message, idUser/*, senderName, idReceiver, idCours, */) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${object}/${message}/${idUser}`);
  }

  getMessages(idUser) {
    return this.http.get<Message[]>(`${this.urlApi}/${this.controller}/getMessages/${idUser}`);
  }

}
