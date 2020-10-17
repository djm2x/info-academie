import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Branche } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class BrancheService extends SuperService<Branche> {

  constructor() {
    super('branches');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idNiveauScolaire, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}/${idNiveauScolaire}`);
  }

  getAllForStatistique(nom, nomAr, idNiveauScolaire, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${nom}/${nomAr}/${idNiveauScolaire}`);
  }

}
