import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Video, Activite, Ville, Prof } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends SuperService<any> {

  constructor() {
    super('home');
  }

  welcome() {
    return this.http.get<{ videos: Video[], activites: Activite[], villes: Ville[], profs: Prof[] }>
      (`${this.urlApi}/${this.controller}/welcome`);
  }

  searchProfs(q) {
    return this.http.get<{ list: Prof[], count: number }>(`${this.urlApi}/${this.controller}/searchProfs`, { params: q });
  }

}
