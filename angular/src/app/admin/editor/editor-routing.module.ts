import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';


const routes: Routes = [
  { path: 'editor', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: EditorComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
