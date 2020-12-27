import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question/question.component';
import { UpdateComponent } from './question/update/update.component';

@NgModule({
  declarations: [
    QuestionComponent,
    QuizComponent,
    UpdateComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
