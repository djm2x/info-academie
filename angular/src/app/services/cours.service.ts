import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Cours } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends SuperService<Cours> {

  constructor() {
    super('courss');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, filesUrl, idNiveauScolaire, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}/${filesUrl}/${idNiveauScolaire}`);
  }

  getAllForStatistique(nom, nomAr, filesUrl, idNiveauScolaire, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${nom}/${nomAr}/${filesUrl}/${idNiveauScolaire}`);
  }

}
