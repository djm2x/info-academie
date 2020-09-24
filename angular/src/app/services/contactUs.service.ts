import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { ContactUs } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService extends SuperService<ContactUs> {

  constructor() {
    super('contactUss');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, object, msg, idUser, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${object}/${msg}/${idUser}`);
  }

  getAllForStatistique(object, msg, idUser, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${object}/${msg}/${idUser}`);
  }

}
