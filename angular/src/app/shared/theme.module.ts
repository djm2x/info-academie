import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme',
  template: `
    <button mat-button [matMenuTriggerFor]="beforeMenuTheme" color="accent"><mat-icon>palette</mat-icon></button>
    <mat-menu #beforeMenuTheme="matMenu" xPosition="before">
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
  theme = new FormControl('default-theme');

  list = [
    {id: 'gen-theme', name: 'gen-theme'},
    {id: 'default-theme', name: 'default-theme'},
    {id: 'dark-theme', name: 'dark-theme'},
  ];

  constructor(private overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const theme: string = localStorage.getItem('theme') ?? this.list[0].id;

    // first run
    this.theme.setValue(theme);
    this.changeTheme(theme);

    // on every change
    this.theme.valueChanges.subscribe((t: string) => this.changeTheme(t));
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);

    // document.body.querySelector('app-root').className = theme;
    document.body.className = theme + ' mat-typography mat-app-background';

    this.themeForBtnNav(theme);
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
    MatIconModule,
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
