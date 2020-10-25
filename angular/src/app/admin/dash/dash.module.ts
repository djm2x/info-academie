import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { MeComponent } from './me/me.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { TranslateModule } from '@ngx-translate/core';
import { MessageComponent } from './message/message.component';
import { CalendarModule } from 'angular-calendar';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { ProfsComponent } from './profs/profs.component';
import { OffreComponent } from './offre/offre.component';
import { DialogComponent } from './offre/dialog/dialog.component';
import { CoursComponent } from './cours/cours.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { CalendarComponent } from './my-calendar/calendar/calendar.component';
import { DatetimeModule } from 'src/app/components/datetime/datetime.module';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

@NgModule({
  declarations: [
    DashComponent,
    MeComponent,
    MessageComponent,
    CalendarComponent,
    ContactusComponent,
    InfoComponent,
    ProfsComponent,
    OffreComponent,
    DialogComponent,
    CoursComponent,
    MyCalendarComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    TranslateModule,
    CalendarModule,
    ManageFilesModule,
    DatetimeModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
  ],
  providers: [
  ],
})
export class DashModule { }


