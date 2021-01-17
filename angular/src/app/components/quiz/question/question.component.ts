import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Question, Quiz } from 'src/app/models/models';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = false;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Question[] = [];
  // selectedList: Question[] = [];

  displayedColumns = ['value', 'choices', 'responses', 'isMultiChoises', 'time'/*, 'quiz'*/, 'option'];

  // panelOpenState = false;

  value = new FormControl('');
  // idQuiz = new FormControl(0);
  // responses = new FormControl('');
  // choices = new FormControl('');
  // time = new FormControl(0);

  // to child
  toChild = new Subject<{data?: Question, update?: boolean}>();
  quizPrent = new Quiz();
  constructor(public uow: UowService, public dialog: MatDialog , private mydialog: DeleteService
    , public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: {model: Quiz}) {
  }

  ngOnInit() {
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).pipe(startWith(null as any)).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.value.value === '' ? '*' : this.value.value,
          this.data.model.id
        );
      }
    );

    this.subs.push(sub);

    // for add question, we add foreign key idQuiz
    const o = new Question();
    o.idQuiz = this.data.model.id;

    setTimeout(() => this.toChild.next({data: o}), 300);

    this.toChild.subscribe(r => {
      if (r.update === true) {
        this.update.next(true);
      }
    });
  }

  reset() {
    this.value.setValue('');
    // this.responses.setValue('');
    // this.choices.setValue('');
    // this.time.setValue(0);
    // this.idQuiz.setValue(0);

    this.update.next(true);
  }
  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, value, idQuiz,) {
    const sub = this.uow.questions.getAll(startIndex, pageSize, sortBy, sortDir, value, idQuiz).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  // openDialog(o: Question, text) {
  //   const dialogRef = this.dialog.open(UpdateComponent, {
  //     width: '1100px',
  //     disableClose: true,
  //     data: { model: o, title: text }
  //   });

  //   return dialogRef.afterClosed();
  // }

  // add() {
  //   const o = new Question();
  //   o.idQuiz = this.data.model.id;

  //   setTimeout(() => this.toChild.next({data: o}), 300);
  // }

  edit(o: Question) {
    o.idQuiz = this.data.model.id;
    this.toChild.next({data: o});
  }


  async delete(id: number) {
    const r = await this.mydialog.openDialog('Question').toPromise();
    if (r === 'ok') {
      const sub = this.uow.questions.delete(id).subscribe(() => this.update.next(true));

      this.subs.push(sub);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

