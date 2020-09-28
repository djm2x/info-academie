import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Prof } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProfService extends SuperService<Prof> {

  constructor() {
    super('profs');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, experience, approche, intro, videoUrl, cvUrl, prixHrWeb, prixHrHome, prixHrWebGroupe, prixHrHomeGroupe, idsTypeActivites, idsActivites, idsTypeCours, idsLieuCours, idsNiveauScolaires, idUser, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${experience}/${approche}/${intro}/${videoUrl}/${cvUrl}/${prixHrWeb}/${prixHrHome}/${prixHrWebGroupe}/${prixHrHomeGroupe}/${idsTypeActivites}/${idsActivites}/${idsTypeCours}/${idsLieuCours}/${idsNiveauScolaires}/${idUser}`);
  }

  getByIdUser(id: number) {
    return this.http.get<Prof>(`${this.urlApi}/${this.controller}/getByIdUser/${id}`);
  }

}
