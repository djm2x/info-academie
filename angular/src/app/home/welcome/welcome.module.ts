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

@NgModule({
  declarations: [WelcomeComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    ThemeModule,
  ]
})
export class WelcomeModule { }
