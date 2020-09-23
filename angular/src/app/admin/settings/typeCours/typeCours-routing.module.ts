import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeCoursComponent } from './typeCours.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: TypeCoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCoursRoutingModule { }
