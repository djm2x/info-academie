import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { MeComponent } from './me/me.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [DashComponent, MeComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    TranslateModule,
  ]
})
export class DashModule { }
