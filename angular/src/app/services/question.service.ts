import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Question } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends SuperService<Question> {

  constructor() {
    super('questions');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, value, idQuiz ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${value}/${idQuiz}`);
  }

  getQuestions(idQuiz) {
    return this.http.get<Question[]>(`${this.urlApi}/${this.controller}/getQuestions/${idQuiz}`);
  }

}
