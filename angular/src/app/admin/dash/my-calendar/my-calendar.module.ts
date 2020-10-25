import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCalendarRoutingModule } from './my-calendar-routing.module';
import { MyCalendarComponent } from './my-calendar.component';
import { UpdateComponent } from './update/update.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatetimeModule } from 'src/app/components/datetime/datetime.module';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { CalendarModule } from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/fr';

registerLocaleData(locale);

@NgModule({
  declarations: [
    MyCalendarComponent,
    CalendarComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    MyCalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    // DatetimeModule,
    CalendarModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,

  ]
})
export class MyCalendarModule { }
