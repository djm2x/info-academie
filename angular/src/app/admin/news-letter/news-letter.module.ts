import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { ImgUploadModule } from 'src/app/img-upload/img-upload.module';
import { NewsLetterComponent } from './news-letter.component';
import { NewsLetterRoutingModule } from './news-letter-routing.module';


@NgModule({
  declarations: [
    NewsLetterComponent,
  ],
  imports: [
    CommonModule,
    NewsLetterRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    ImgUploadModule,
  ]
})
export class NewsLetterModule { }
