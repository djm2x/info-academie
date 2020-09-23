import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LieuCoursComponent } from './lieuCours.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: LieuCoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LieuCoursRoutingModule { }
