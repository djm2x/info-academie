import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { ThemeModule } from 'src/app/shared/theme.module';
import { SecondComponent } from './second/second.component';
import { ProfsComponent } from './profs/profs.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [WelcomeComponent, FirstComponent, SecondComponent, ProfsComponent, CarouselComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    // ThemeModule,
    SlickCarouselModule,
    CarouselModule,
    TranslateModule,
  ]
})
export class WelcomeModule { }
