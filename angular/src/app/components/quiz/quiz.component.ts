import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy, Input } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Cours, Quiz } from 'src/app/models/models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new Subject<boolean>();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Quiz[] = [];
  selectedList: Quiz[] = [];

  displayedColumns = [/*'select',*/  'title', 'enableTime', 'context', 'option'];

  panelOpenState = false;

  title = new FormControl('');
  idContext = new FormControl(0);

  @Input() contextObs = new Subject<Cours>();
  context = new Cours();

  // form
  myForm: FormGroup;
  o = new Quiz();

  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).subscribe(
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
          this.title.value === '' ? '*' : this.title.value,
          this.idContext.value === 0 ? 0 : this.idContext.value,

        );
      });

    this.subs.push(sub);

    this.contextObs.subscribe(r => {
      this.context = r;
      this.idContext.setValue(r.id);

      console.log(this.context)

      this.update.next(true);

      this.createForm();
    });
  }

  // begin form
  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      title: [this.o.title, [Validators.required,]],
      description: [this.o.description],
      enableTime: [this.o.enableTime, [Validators.required,]],
      idContext: [this.idContext.value, [Validators.required,]],
    });
  }

  submit(o: Quiz): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.quizzes.post(o).subscribe(r => {
        this.update.next(true);
        this.resetForm();
      });
    } else {
      sub = this.uow.quizzes.put(o.id, o).subscribe(r => {
        this.update.next(true);
        this.resetForm();
      });
    }

    this.subs.push(sub);
  }

  resetForm() {
    this.o = new Quiz();
    this.createForm();
  }

  // reset() {
  //   this.title.setValue('');
  //   this.idContext.setValue(0);

  //   this.update.next(true);
  // }

  // search() {
  //   this.update.next(true);
  // }

  getPage(startIndex, pageSize, sortBy, sortDir, title, idContext,) {
    const sub = this.uow.quizzes.getAll(startIndex, pageSize, sortBy, sortDir, title, idContext,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  openDialog(o: Quiz, text) {
    const dialogRef = this.dialog.open(QuestionComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text }
    });

    return dialogRef.afterClosed();
  }


  edit(o: Quiz) {
    this.o = o;
    this.createForm();
  }

  addQuestion(o: Quiz) {
    this.openDialog(o, `Question`).subscribe((result: Quiz) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog('Quiz').toPromise();
    if (r === 'ok') {
      const sub = this.uow.quizzes.delete(id).subscribe(() => this.update.next(true));

      this.subs.push(sub);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

