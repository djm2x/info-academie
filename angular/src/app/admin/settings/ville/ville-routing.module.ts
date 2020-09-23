import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VilleComponent } from './ville.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: VilleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VilleRoutingModule { }
