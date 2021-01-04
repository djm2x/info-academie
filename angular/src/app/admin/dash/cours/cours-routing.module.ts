import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from 'src/app/components/quiz/question/question.component';
import { CoursComponent } from './cours.component';
import { DetailComponent } from './detail/detail.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: CoursComponent },
  { path: 'list/:id', component: DetailComponent },
  { path: 'list/:id/quiz', component: QuizComponent },
  { path: 'list/:id/quiz/:title', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
