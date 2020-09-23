import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteComponent } from './activite.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: ActiviteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiviteRoutingModule { }
