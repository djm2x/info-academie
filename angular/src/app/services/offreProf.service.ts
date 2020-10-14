import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { OffreProf } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OffreProfService extends SuperService<OffreProf> {

  constructor() {
    super('offreProfs');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, interval, value, idTypeCours, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}`);
  }

  getAll2() {
    return this.http.get<OffreProf[]>(`${this.urlApi}/${this.controller}/getAll2`);
  }

}
