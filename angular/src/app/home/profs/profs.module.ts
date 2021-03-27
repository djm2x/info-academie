import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfsRoutingModule } from './profs-routing.module';
import { ProfsComponent } from './profs.component';
import { MatModule } from 'src/app/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfsComponent],
  imports: [
    CommonModule,
    ProfsRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProfsModule { }
