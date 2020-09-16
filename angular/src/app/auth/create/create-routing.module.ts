import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { CreateComponent } from './create.component';
import { ProfComponent } from './prof/prof.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: CreateComponent,
    children: [
      { path: '', redirectTo: 'choose', pathMatch: 'full'},
      { path: 'choose', component: ChooseComponent},
      { path: 'student', component: StudentComponent},
      { path: 'prof', component: ProfComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
