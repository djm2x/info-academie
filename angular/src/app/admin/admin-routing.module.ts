import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
/*{imports}*/

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      // { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule), data: {animation: 'dash'} },
      { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), data: {animation: 'user'} },
      { path: 'ville', loadChildren: () => import('./ville/ville.module').then(m => m.VilleModule), data: {animation: 'ville'} },
      { path: 'detailUserActivite', loadChildren: () => import('./detailUserActivite/detailUserActivite.module').then(m => m.DetailUserActiviteModule), data: {animation: 'detailUserActivite'} },
      { path: 'typeActivite', loadChildren: () => import('./typeActivite/typeActivite.module').then(m => m.TypeActiviteModule), data: {animation: 'typeActivite'} },
      { path: 'activite', loadChildren: () => import('./activite/activite.module').then(m => m.ActiviteModule), data: {animation: 'activite'} },
      
    ]
  },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
