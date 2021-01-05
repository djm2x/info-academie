import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/models';
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
  constructor(private route: ActivatedRoute, public uow: UowService
    , public session: SessionService, public data: DataService) { }

  async ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('title');
    this.idQuiz = +this.param.split('_').reduceRight(e => e);

    console.log(this.idQuiz)

    this.uow.questions.getQuestions(this.idQuiz).subscribe(r => {
      console.log(r);
      this.list = r;
    });
  }

}
