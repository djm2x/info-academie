import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { Question, Response } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { DataService } from '../data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  idQuiz = 0;
  param = '';
  list: Question[] = [];
  responses: Response[] = [];
  noteGlobale = 0;
  constructor(private route: ActivatedRoute, public uow: UowService
    , public session: SessionService, public data: DataService
    , public location: Location) { }

  async ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('title');
    this.idQuiz = +this.param.split('_').reduceRight(e => e);

    this.uow.questions.getQuestions(this.idQuiz).subscribe(r => {
      console.log(r);
      this.list = r;

      this.responses = this.list.map(e => {
        return {
          id: 0,
          trueResponse: e.responsesString,
          userResponse: '',
          date: new Date(),
          note: 0,
          idQuestion: e.id,
          idUser: this.session.user.id,
        } as any;
      });
    });
  }

  select(questionIndex: number, responseSelected: string, cheched: MatCheckbox | MatRadioButton ) {
    if (cheched instanceof MatRadioButton ) {
      this.responses[questionIndex].userResponse = `;${responseSelected}`;
    }

    else if (cheched.checked) {
      this.responses[questionIndex].userResponse += `;${responseSelected}`;
    } else {
      const r = this.responses[questionIndex].userResponse.replace(`;${responseSelected}`, '');
      this.responses[questionIndex].userResponse = r;
    }

    // calculate note
    const l = this.responses[questionIndex].userResponse.split(';').filter(e => e !== '').sort();
    const l2 = this.responses[questionIndex].trueResponse.split(';').filter(e => e !== '').sort();

    if (l.length === l2.length && l.every((val, index) => val === l2[index])) {
      this.responses[questionIndex].note = 1;
    } else {
      this.responses[questionIndex].note = 0;
    }

    this.noteGlobale = this.responses.map(e => e.note).reduce((p, c) => p + c, 0);
  }

}
