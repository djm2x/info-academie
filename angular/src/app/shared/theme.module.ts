import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-theme',
  template: `
    <!-- <mat-slide-toggle #slide color="warn" [formControl]="isChecked"></mat-slide-toggle> -->

    <button mat-button [matMenuTriggerFor]="beforeMenuTheme">
      theme
    </button>
    <mat-menu #beforeMenuTheme="matMenu" xPosition="before">
      <!-- <button mat-menu-item (click)="changeTheme()">Se déconnecter</button> -->
      <mat-radio-group [formControl]="theme" class="d-flex flex-column p-2">
        <mat-radio-button matRipple value="gen-theme">gen-theme</mat-radio-button>
        <mat-radio-button matRipple value="default-theme">default-theme</mat-radio-button>
        <mat-radio-button matRipple value="dark-theme">dark-theme</mat-radio-button>
      </mat-radio-group>
    </mat-menu>
  `,
  styles: [`

  `]
})
export class ThemeComponent implements OnInit {
  isChecked = new FormControl(false);
  theme = new FormControl('default-theme');

  constructor(private overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const theme: string = localStorage.getItem('theme') ?? 'default-theme';
    // const isChecked: boolean = JSON.parse(localStorage.getItem('checked') ?? 'false');

    // first run
    this.theme.setValue(theme);
    setTimeout(() => {
      this.changeTheme(theme);

    }, 500);

    // on every change
    this.theme.valueChanges.subscribe((t: string) => this.changeTheme(t));
    // this.isChecked.valueChanges.subscribe((checked: boolean) => this.changeTheme(checked));
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);

    document.body.querySelector('app-root').className = theme;

    this.themeForBtnNav(theme);
  }

  changeTheme0(checked: boolean) {
    localStorage.setItem('checked', JSON.stringify(checked));

    document.body.querySelector('app-root').className = checked ? 'dark-theme' : 'default-theme';

    this.themeForBtnNav(checked ? 'dark-theme' : 'default-theme');
  }

  themeForBtnNav(theme) {
    // this.themeClass = theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
  }
}

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
