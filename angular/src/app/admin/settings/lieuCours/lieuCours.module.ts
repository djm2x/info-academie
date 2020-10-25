import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LieuCoursRoutingModule } from './lieuCours-routing.module';
import { LieuCoursComponent } from './lieuCours.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from 'src/app/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'src/app/components/title/title.module';
import { UpdateComponent } from './update/update.component';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';


@NgModule({
  declarations: [LieuCoursComponent, UpdateComponent],
  imports: [
    CommonModule,
    LieuCoursRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    TitleModule,
    ManageFilesModule,

  ]
})
export class LieuCoursModule { }
