import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiveauScolaireComponent } from './niveauScolaire.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: NiveauScolaireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveauScolaireRoutingModule { }
