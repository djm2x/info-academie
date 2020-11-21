import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfsComponent } from './profs.component';

describe('ProfsComponent', () => {
  let component: ProfsComponent;
  let fixture: ComponentFixture<ProfsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
