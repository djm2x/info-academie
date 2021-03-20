import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SessionService } from '../shared';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../shared/animations';
import { MediaService } from '../shared/media.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChatHubService } from './dash/chat/chat.hub.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [slideInAnimation],
})
export class AdminComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  isMobileWidth = false;
  actuelRoute = this.router.url;
  adminRoutes = [
    { route: '/admin/settings/niveauScolaire', name: 'Niveau, Cours, Quiz' },
    { route: '/admin/settings/branche', name: 'Branche' },
    { route: '/admin/settings/activite', name: 'Activites' },
    { route: '/admin/settings/contactUs', name: 'Contact Nous' },
    { route: '/admin/settings/user', name: 'Users' },
    { route: '/admin/settings/ville', name: 'Villes' },
    { route: '/admin/settings/typeActivite', name: 'Type Activites' },
    { route: '/admin/settings/typeCours', name: 'Type Cours' },
    { route: '/admin/settings/lieuCours', name: 'lieu Cours' },
    { route: '/admin/settings/video', name: 'Video' },
    { route: '/admin/settings/offreProf', name: 'offre Prof' },
    { route: '/admin/settings/eventProf', name: 'event Prof' },
  ];

  dashRoutes = [
    { route: '/admin/dash/me', name: 'Moi' },
    { route: '/admin/dash/profs', name: 'Profs' },
    { route: '/admin/dash/chat', name: 'Message' },
    { route: '/admin/dash/calendar', name: 'Calandrie' },
    { route: '/admin/dash/cours', name: 'Cours' },
    { route: '/admin/dash/info', name: 'Informations' },
    { route: '/admin/dash/offre', name: 'Offres' },
    // { route: '/admin/dash/facteurs', name: 'Facteurs' },
  ];
  constructor(public session: SessionService, private router: Router
    , public myMedia: MediaService, @Inject('BASE_URL') public url: string
    , private toastr: ToastrService, public dialog: MatDialog
    , private chat: ChatHubService) { }


  ngOnInit(): void {
    this.myMedia.windowSizeChanged.subscribe(r => this.isMobileWidth = r.width <= 700);

    this.chat.createConnection().startConnection();
    this.messageInComing();

    this.getRoute();
  }

  messageInComing() {
    // this.chat.messageReceived.pipe( /*debounceTime(300),*/distinctUntilChanged()).subscribe(async (r: Chat) => {
    //   // console.log(r);
    //   this.toastrChat(r);

    // });
  }

  getRoute() {
    this.router.events.pipe().subscribe(route => {
      if (route instanceof NavigationStart) {
        this.actuelRoute = route.url;
        // console.log(route);
        // console.log(this.route);
      }
    });
  }

  disconnect() {
    this.session.doSignOut();
    this.router.navigate(['/auth']);
  }

  get profile() {
    return {
      name: this.session.user.nom + ' ' + this.session.user.prenom,
      role: this.session.user.role.toUpperCase(),
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return '';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  openDialog() {
    // const dialogRef = this.dialog.open(UpdateComponent, {
    //   width: '750px',
    //   disableClose: true,
    //   data: { model: this.session.user, title: `` }
    // });

    // return dialogRef.afterClosed();
  }

  ngOnDestroy(): void {
    this.chat.stopConnection();
  }

}
