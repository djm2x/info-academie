import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventProfComponent } from './eventProf.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: EventProfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventProfRoutingModule { }
