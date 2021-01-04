import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  id = 0;
  param = '';
  list: Quiz[] = [];
  constructor(private route: ActivatedRoute, public uow: UowService
    , public session: SessionService, public data: DataService) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.id = +this.param.split('_').reduceRight(e => e);

    console.log(this.id)

    this.uow.quizzes.getQuiz(this.id).subscribe(r => {
      console.log(r);
      this.list = r;
    });
  }

}
