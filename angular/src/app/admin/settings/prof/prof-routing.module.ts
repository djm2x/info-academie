import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfComponent } from './prof.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: ProfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
