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
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { ProfsComponent } from './profs/profs.component';
import { OffreComponent } from './offre/offre.component';
import { DialogComponent } from './offre/dialog/dialog.component';

@NgModule({
  declarations: [
    DashComponent,
    MeComponent,
    MessageComponent,
    ContactusComponent,
    InfoComponent,
    ProfsComponent,
    OffreComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    TranslateModule,

    ManageFilesModule,

  ],
  providers: [
  ],
})
export class DashModule { }


