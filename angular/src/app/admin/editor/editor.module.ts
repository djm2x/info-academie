import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditorRoutingModule } from './editor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    // FroalaEditorModule,
    // FroalaViewModule,
    EditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ]
})
export class EditorModule { }
