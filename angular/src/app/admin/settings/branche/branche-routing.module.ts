import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrancheComponent } from './branche.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: BrancheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrancheRoutingModule { }
