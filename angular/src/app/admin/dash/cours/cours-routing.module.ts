import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { CoursComponent } from './cours.component';
import { DetailComponent } from './detail/detail.component';
import { QuizComponent } from './quiz/quiz.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: CoursComponent },
  { path: 'list/:id', component: DetailComponent },
  // { path: 'list/:id/:file', component: FileComponent },
  { path: 'list/:id/quiz', component: QuizComponent },
  { path: 'list/:id/quiz/:title', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
