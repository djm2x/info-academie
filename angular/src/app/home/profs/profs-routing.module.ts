import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfsComponent } from './profs.component';

const routes: Routes = [{ path: '', component: ProfsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfsRoutingModule { }
