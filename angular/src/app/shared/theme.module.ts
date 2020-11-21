import { Component, HostBinding, Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme',
  template: `
    <mat-slide-toggle #slide color="warn"  (change)="changeTheme($event.checked)"></mat-slide-toggle>
    <!-- [formControl]="isChecked" -->
  `,
  styles: [`

  `]
})
export class ThemeComponent implements OnInit {
  // @HostBinding('class.default-theme') defaultTheme = true;
  // @HostBinding('class.dark-theme') darkTheme = false;
  isChecked = new FormControl(false);
  @ViewChild('slide') slide: MatSlideToggle;

  constructor(private overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: Document) { }


  ngOnInit() {



    const isChecked: boolean = JSON.parse(localStorage.getItem('checked') ?? 'false');

    // first run
    this.isChecked.setValue(isChecked);
    this.changeTheme(isChecked);

    // on every change
    this.isChecked.valueChanges.subscribe((checked: boolean) => this.changeTheme(checked));
  }

  changeTheme(checked: boolean) {
    console.log(checked)
    console.log(this.slide)
    localStorage.setItem('checked', JSON.stringify(checked));
    // this.defaultTheme = !checked;
    // this.darkTheme = checked;
    // this.service.filter = checked ? 'brightness(85%)' : '';

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
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
