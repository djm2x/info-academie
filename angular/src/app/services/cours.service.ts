import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Cours } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends SuperService<Cours> {

  constructor() {
    super('cours');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idNiveauScolaire, idBranche) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}/${idNiveauScolaire}/${idBranche}`);
  }

}
