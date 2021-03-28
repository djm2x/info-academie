import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfComponent } from './prof/prof.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'profs', loadChildren: () => import('./profs/profs.module').then(m => m.ProfsModule) },
      { path: 'prof/:name-id', component: ProfComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }