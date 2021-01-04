import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends SuperService<Quiz> {

  constructor() {
    super('quizzes');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, title, idContext ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${title}/${idContext}`);
  }

  getQuiz(idContext) {
    return this.http.get<Quiz[]>(`${this.urlApi}/${this.controller}/getQuiz/${idContext}`);

  }

}
