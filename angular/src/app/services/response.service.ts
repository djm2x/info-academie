import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Response } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ResponseService extends SuperService<Response> {

  constructor() {
    super('responses');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, idQuestion, idUser) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${idQuestion}/${idUser}`);
  }

}
