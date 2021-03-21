import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChatHubService } from '../admin/dash/chat/chat.hub.service';
import { SessionService } from '../shared';
import { slideInAnimation } from '../shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  actuelRoute = this.router.url;
  date = new Date();
  constructor(public session: SessionService, private router: Router
    , public myMedia: MediaService, @Inject('BASE_URL') public url: string
    , private toastr: ToastrService, public dialog: MatDialog
    , private chat: ChatHubService) { }


  ngOnInit(): void {
    // this.myMedia.windowSizeChanged.subscribe(r => this.isMobileWidth = r.width <= 700);

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
      name: this.session.user?.nom + ' ' + this.session.user?.prenom,
      role: this.session.user?.role.toUpperCase(),
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
