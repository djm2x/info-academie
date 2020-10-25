import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCoursRoutingModule } from './typeCours-routing.module';
import { TypeCoursComponent } from './typeCours.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from 'src/app/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'src/app/components/title/title.module';
import { UpdateComponent } from './update/update.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';


@NgModule({
  declarations: [TypeCoursComponent, UpdateComponent],
  imports: [
    CommonModule,
    TypeCoursRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    TitleModule,
    ManageFilesModule,

  ]
})
export class TypeCoursModule { }
