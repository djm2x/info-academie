import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../mat.module';
import { ThemeModule } from '../shared/theme.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfComponent } from './prof/prof.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, ProfComponent, AboutUsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    ThemeModule,
    SlickCarouselModule,
  ]
})
export class HomeModule { }
