import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicChartComponent } from './dynamic-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [DynamicChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [DynamicChartComponent]
})
export class DynamicChartModule { }
