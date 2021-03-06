import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursComponent } from './cours/cours.component';

import { DashComponent } from './dash.component';
import { InfoComponent } from './info/info.component';
import { MeComponent } from './me/me.component';
import { MessageComponent } from './message/message.component';
// import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { OffreComponent } from './offre/offre.component';
import { ProfsComponent } from './profs/profs.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: DashComponent,
    children: [
      { path: '', redirectTo: 'me', pathMatch: 'full' },
      { path: 'me', component: MeComponent, },
      // { path: 'message', component: MessageComponent, },
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
      // { path: 'calendar', component: MyCalendarComponent, },
      { path: 'calendar', loadChildren: () => import('./my-calendar/my-calendar.module').then(m => m.MyCalendarModule) },
      { path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) },
      { path: 'contactus', component: ContactusComponent, },
      { path: 'info', component: InfoComponent, },
      { path: 'profs', component: ProfsComponent, },
      { path: 'offre', component: OffreComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
