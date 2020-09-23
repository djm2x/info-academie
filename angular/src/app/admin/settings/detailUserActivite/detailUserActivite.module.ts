import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailUserActiviteRoutingModule } from './detailUserActivite-routing.module';
import { DetailUserActiviteComponent } from './detailUserActivite.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from 'src/app/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'src/app/components/title/title.module';
import { UpdateComponent } from './update/update.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { DynamicChartModule } from 'src/app/components/dynamic-chart/dynamic-chart.module';

@NgModule({
  declarations: [DetailUserActiviteComponent, UpdateComponent],
  imports: [
    CommonModule,
    DetailUserActiviteRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    TitleModule,
    ManageFilesModule,
    DynamicChartModule,
  ]
})
export class DetailUserActiviteModule { }
