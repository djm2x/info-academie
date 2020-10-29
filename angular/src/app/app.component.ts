import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from './shared/splash-screen.service';
import { MyTranslateService } from './my.translate.service';


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
