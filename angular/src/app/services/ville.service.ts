import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Ville } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VilleService extends SuperService<Ville> {

  constructor() {
    super('villes');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}`);
  }

  getAllForStatistique(nom, nomAr, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${nom}/${nomAr}`);
  }

}
