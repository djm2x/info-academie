import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), data: { animation: 'user' } },
      { path: 'ville', loadChildren: () => import('./ville/ville.module').then(m => m.VilleModule), data: { animation: 'ville' } },
      { path: 'detailUserActivite', loadChildren: () => import('./detailUserActivite/detailUserActivite.module').then(m => m.DetailUserActiviteModule), data: { animation: 'detailUserActivite' } },
      { path: 'typeActivite', loadChildren: () => import('./typeActivite/typeActivite.module').then(m => m.TypeActiviteModule), data: { animation: 'typeActivite' } },
      { path: 'activite', loadChildren: () => import('./activite/activite.module').then(m => m.ActiviteModule), data: { animation: 'activite' } },
      { path: 'typeCours', loadChildren: () => import('./typeCours/typeCours.module').then(m => m.TypeCoursModule), data: { animation: 'typeCours' } },
      { path: 'lieuCours', loadChildren: () => import('./lieuCours/lieuCours.module').then(m => m.LieuCoursModule), data: { animation: 'lieuCours' } },
      { path: 'niveauScolaire', loadChildren: () => import('./niveauScolaire/niveauScolaire.module').then(m => m.NiveauScolaireModule), data: { animation: 'niveauScolaire' } },
      { path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule), data: { animation: 'message' } },
      { path: 'contactUs', loadChildren: () => import('./contactUs/contactUs.module').then(m => m.ContactUsModule), data: { animation: 'contactUs' } },
      { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule), data: { animation: 'video' } },
      { path: 'offreProf', loadChildren: () => import('./offreProf/offreProf.module').then(m => m.OffreProfModule), data: { animation: 'offreProf' } },
      { path: 'branche', loadChildren: () => import('./branche/branche.module').then(m => m.BrancheModule), data: { animation: 'branche' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
