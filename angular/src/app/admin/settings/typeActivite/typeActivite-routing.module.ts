import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeActiviteComponent } from './typeActivite.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: TypeActiviteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeActiviteRoutingModule { }
