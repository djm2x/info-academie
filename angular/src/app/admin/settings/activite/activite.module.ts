import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiviteRoutingModule } from './activite-routing.module';
import { ActiviteComponent } from './activite.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from 'src/app/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'src/app/components/title/title.module';
import { UpdateComponent } from './update/update.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { DynamicChartModule } from 'src/app/components/dynamic-chart/dynamic-chart.module';

@NgModule({
  declarations: [ActiviteComponent, UpdateComponent],
  imports: [
    CommonModule,
    ActiviteRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    TitleModule,
    ManageFilesModule,
    DynamicChartModule,
  ]
})
export class ActiviteModule { }
