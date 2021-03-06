import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { TypeActivite } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TypeActiviteService extends SuperService<TypeActivite> {

  constructor() {
    super('typeActivites');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}`);
  }

  getAllWithActivites() {
    return this.http.get<TypeActivite>(`${this.urlApi}/${this.controller}/getAllWithActivites`);
  }

  



}
