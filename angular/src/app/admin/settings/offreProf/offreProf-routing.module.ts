import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffreProfComponent } from './offreProf.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: OffreProfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreProfRoutingModule { }
