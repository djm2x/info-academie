import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from './shared/splash-screen.service';
import { MyTranslateService } from './my.translate.service';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public mytranslate: MyTranslateService, private splashScreenService: SplashScreenService) { }

  ngOnInit() {
    this.mytranslate.init();
    this.mytranslate.currentLang().subscribe(r => {
      this.mytranslate.lang.next(r.lang);
    });

    // this.getRoute();

    (window as any).Pusher = Pusher;
    const e = new Echo({
      broadcaster: 'pusher',
      // auth: {
      //   headers: { Authorization: 'Bearer ' + 'token' }
      // },
      key: '454c',
      wsHost: '127.0.0.1',
      wsPort: 6001,
      forceTLS: false,
      // cluster: 'mt1',
      // enabledTransports: ['ws', 'wss'],
      disableStats: true,
    });

    e.channel('myhub').listen('MessageEvent', r => {
      console.log(r);
    });

  }

  // get patchRoute() { return this.route.split('/'); }

  // getRoute() {
  //   this.router.events.subscribe(route => {
  //     if (route instanceof NavigationStart) {
  //       this.route = route.url;
  //       console.log(this.route);
  //     }
  //   });
  // }
}
