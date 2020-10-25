import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { EventProf } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EventProfService extends SuperService<EventProf> {

  constructor() {
    super('eventProfs');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, year, month, idUser, title) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${year}/${month}/${idUser}/${title}`);
  }

  getByYearMonth(year, month, idUser) {

    return this.http.get<EventProf[]>(`${this.urlApi}/${this.controller}/getByYearMonth/${year}/${month}/${idUser}`);
  }

}
