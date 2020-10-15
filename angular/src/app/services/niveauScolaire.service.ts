import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { NiveauScolaire } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NiveauScolaireService extends SuperService<NiveauScolaire> {

  constructor() {
    super('niveauScolaires');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}`);
  }

  getAll2() {
    return this.http.get<NiveauScolaire[]>(`${this.urlApi}/${this.controller}/getAll2`);
  }
}
