import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  @Input() parent = new Subject<{ data?: Question, update?: boolean }>();

  myForm: FormGroup;
  o = new Question();
  title = '';

  listChoisesForm = new FormArray([new FormControl('')]);
  listResponces: {i: number, response: string}[] = [];

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  ngOnInit() {
    this.createForm();
    this.handleChoises();

    this.parent.subscribe(r => {
      console.log(r)
      this.o = r.data;
      this.createForm();
      this.handleChoises();
    });
  }

  handleChoises() {
    const list: string = this.myForm.get('choices').value;

    if (list) {
      this.listChoisesForm.removeAt(0);
      list.split(';').map(e => this.listChoisesForm.push(new FormControl(e)));
    }

    this.listChoisesForm.valueChanges.subscribe((r: string[]) => {
      if (r.filter(e => e.trim() !== '').length > 0) {
        this.myForm.get('choices').setValue(r.join(';'));
      }
    });
  }

  handleResponses(checked: boolean, response: string, i: number) {
    const index = this.listResponces.findIndex(e => e.i === i);

    if (checked) {
      index === - 1 ? this.listResponces.push({i, response}) : this.listResponces.splice(index, 1);
    } else {
      this.listResponces.splice(index, 1)
    }

    this.myForm.get('responses').setValue(this.listResponces.map(e => e.response).join(';'));
  }

  add() {
    this.listChoisesForm.push(new FormControl(''));
  }

  submit(o: Question): void {
    let sub = null;

    this.myForm.get('isMultiChoises').setValue(this.listResponces.length > 1);

    if (o.id === 0) {
      sub = this.uow.questions.post(o).subscribe(r => {
        // this.resetForm();
        // this.parent.next({ update: true });
      });
    } else {
      sub = this.uow.questions.put(o.id, o).subscribe(r => {
        // this.resetForm();
        // this.parent.next({ update: true });
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      value: [this.o.value, [Validators.required,]],
      responses: [this.o.responses, [Validators.required,]],
      choices: [this.o.choices, [Validators.required,]],
      isMultiChoises: [this.o.isMultiChoises, [Validators.required,]],
      time: [this.o.time, [Validators.required,]],
      idQuiz: [this.o.idQuiz, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new Question();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
