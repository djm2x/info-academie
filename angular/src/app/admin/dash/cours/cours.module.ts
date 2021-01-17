import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CoursComponent } from './cours.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { DetailComponent } from './detail/detail.component';
import { DataService } from './data.service';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FileComponent } from './file/file.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';
import { VideoComponent } from './detail/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
    CoursComponent,
    DetailComponent,
    QuizComponent,
    QuestionsComponent,
    FileComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    //
    PdfViewerModule,
    InlineSVGModule,
    YouTubePlayerModule,
  ],
  providers: [
    DataService,
  ]
})
export class CoursModule { }
