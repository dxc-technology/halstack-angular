import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerUndeterminedComponent } from './spinner-undetermined.component';

describe('SpinnerUndeterminedComponent', () => {
  let component: SpinnerUndeterminedComponent;
  let fixture: ComponentFixture<SpinnerUndeterminedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerUndeterminedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerUndeterminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
