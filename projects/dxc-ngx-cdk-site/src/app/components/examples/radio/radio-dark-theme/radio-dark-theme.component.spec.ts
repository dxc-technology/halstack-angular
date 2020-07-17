import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDarkThemeComponent } from './radio-dark-theme.component';

describe('RadioDarkThemeComponent', () => {
  let component: RadioDarkThemeComponent;
  let fixture: ComponentFixture<RadioDarkThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDarkThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
