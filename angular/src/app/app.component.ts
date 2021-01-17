import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from './shared/splash-screen.service';
import { MyTranslateService } from './my.translate.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  route = this.router.url;
  constructor(public mytranslate: MyTranslateService, private splashScreenService: SplashScreenService
    , private router: Router) { }

  ngOnInit() {
    this.mytranslate.init();
    this.mytranslate.currentLang().subscribe(r => {
      this.mytranslate.lang.next(r.lang);
    });

    this.getRoute();
    this.saveRoute();


  }

  // get patchRoute() { return this.route.split('/'); }

  getRoute() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationStart) {
        this.route = route.url;
        this.saveRoute();
      }
    });
  }

  saveRoute() {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> : ', this.route);
    if (!this.route.includes('auth')) {
      localStorage.setItem('route', this.route);
    }
  }
}
