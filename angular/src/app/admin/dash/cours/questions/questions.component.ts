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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  id = 0;
  param = '';
  list: Question[] = [];
  constructor(private route: ActivatedRoute, public uow: UowService
    , public session: SessionService, public data: DataService) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.id = +this.param.split('_').reduceRight(e => e);

    console.log(this.id)

    this.uow.questions.getQuestions(this.id).subscribe(r => {
      console.log(r);
      this.list = r;
    });
  }

  get() {
    merge(...[this.paginator.page, this.idCategorie.valueChanges, this.update, this.service.searchValue.event])
      .pipe(startWith(null as any)).subscribe(
      r => {
        // console.log('merge called', r);
        // return
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.idCategorie.value,
          this.service.searchValue.value,
        );
      }
    );
  }

}
