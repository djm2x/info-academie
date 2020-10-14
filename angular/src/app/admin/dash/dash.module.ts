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
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { ProfsComponent } from './profs/profs.component';
import { OffreComponent } from './offre/offre.component';


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
  ]
})
export class DashModule { }
