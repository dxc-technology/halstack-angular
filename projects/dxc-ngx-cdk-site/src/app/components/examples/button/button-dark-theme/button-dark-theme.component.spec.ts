import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDarkThemeComponent } from './button-dark-theme.component';

describe('ButtonDarkThemeComponent', () => {
  let component: ButtonDarkThemeComponent;
  let fixture: ComponentFixture<ButtonDarkThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDarkThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
