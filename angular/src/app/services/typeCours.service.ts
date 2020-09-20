import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { TypeCours } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TypeCoursService extends SuperService<TypeCours> {

  constructor() {
    super('typeCours');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}`);
  }
}
