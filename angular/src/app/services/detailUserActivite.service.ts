import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { DetailUserActivite } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DetailUserActiviteService extends SuperService<DetailUserActivite> {

  constructor() {
    super('detailUserActivites');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, idUser, idActivite, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${idUser}/${idActivite}`);
  }

  getAllForStatistique(idUser, idActivite, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${idUser}/${idActivite}`);
  }

}
