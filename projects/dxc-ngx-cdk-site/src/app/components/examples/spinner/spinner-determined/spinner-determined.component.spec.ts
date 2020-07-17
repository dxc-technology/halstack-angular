import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDeterminedComponent } from './spinner-determined.component';

describe('SpinnerDeterminedComponent', () => {
  let component: SpinnerDeterminedComponent;
  let fixture: ComponentFixture<SpinnerDeterminedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerDeterminedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDeterminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
