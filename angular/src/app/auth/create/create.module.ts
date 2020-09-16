import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { StudentComponent } from './student/student.component';
import { ProfComponent } from './prof/prof.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { ChooseComponent } from './choose/choose.component';
import { TranslateModule } from '@ngx-translate/core';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';


@NgModule({
  declarations: [
    CreateComponent,
    StudentComponent,
    ProfComponent,
    ChooseComponent,
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    TranslateModule,
    ManageFilesModule,
  ]
})
export class CreateModule { }
