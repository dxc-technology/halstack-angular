import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxThemeComponent } from './box-theme.component';

describe('BoxThemeComponent', () => {
  let component: BoxThemeComponent;
  let fixture: ComponentFixture<BoxThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
