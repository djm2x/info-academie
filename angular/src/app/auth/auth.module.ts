import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from '../mat.module';
import { ResetComponent } from './reset/reset.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyTranslateService } from '../my.translate.service';
import { ThemeModule } from '../shared/theme.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ResetComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
    TranslateModule,
    ThemeModule,
  ]
})
export class AuthModule {
  // constructor(public mytranslate: MyTranslateService) {}
 }
