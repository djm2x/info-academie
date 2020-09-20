import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { LieuCours } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LieuCoursService extends SuperService<LieuCours> {

  constructor() {
    super('lieuCours');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}/${nomAr}`);
  }
}
