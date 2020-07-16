import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerThemedComponent } from './spinner-themed.component';

describe('SpinnerThemedComponent', () => {
  let component: SpinnerThemedComponent;
  let fixture: ComponentFixture<SpinnerThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
