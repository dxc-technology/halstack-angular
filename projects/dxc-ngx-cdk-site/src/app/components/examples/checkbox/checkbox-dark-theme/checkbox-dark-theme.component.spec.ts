import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDarkThemeComponent } from './checkbox-dark-theme.component';

describe('CheckboxDarkThemeComponent', () => {
  let component: CheckboxDarkThemeComponent;
  let fixture: ComponentFixture<CheckboxDarkThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxDarkThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
