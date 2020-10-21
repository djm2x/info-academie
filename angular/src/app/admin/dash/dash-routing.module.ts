import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursComponent } from './cours/cours.component';

import { DashComponent } from './dash.component';
import { InfoComponent } from './info/info.component';
import { MeComponent } from './me/me.component';
import { MessageComponent } from './message/message.component';
import { OffreComponent } from './offre/offre.component';
import { ProfsComponent } from './profs/profs.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: DashComponent,
    children: [
      { path: '', redirectTo: 'me', pathMatch: 'full' },
      { path: 'me', component: MeComponent, },
      { path: 'message', component: MessageComponent, },
      { path: 'calendar', component: CalendarComponent, },
      { path: 'contactus', component: ContactusComponent, },
      { path: 'info', component: InfoComponent, },
      { path: 'profs', component: ProfsComponent, },
      { path: 'offre', component: OffreComponent, },
      { path: 'cours', component: CoursComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
