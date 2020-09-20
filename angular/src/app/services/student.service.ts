import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Student } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends SuperService<Student> {

  constructor() {
    super('students');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${ecole}/${niveau}/${nomParent}/${prenomParent}/${tel1Parent}/${tel2Parent}`);
  }

  getAllForStatistique(ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${ecole}/${niveau}/${nomParent}/${prenomParent}/${tel1Parent}/${tel2Parent}`);
  }

}
