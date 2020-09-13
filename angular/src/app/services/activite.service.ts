import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Activite } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService extends SuperService<Activite> {

  constructor() {
    super('activites');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idTypeActivite, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}/${idTypeActivite}`);
  }

  getAllForStatistique(nom, nomAr, idTypeActivite, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${nom}/${nomAr}/${idTypeActivite}`);
  }

}
