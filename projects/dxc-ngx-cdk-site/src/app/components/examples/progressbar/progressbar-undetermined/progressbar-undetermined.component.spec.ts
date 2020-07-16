import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarUndeterminedComponent } from './progressbar-undetermined.component';

describe('ProgressbarUndeterminedComponent', () => {
  let component: ProgressbarUndeterminedComponent;
  let fixture: ComponentFixture<ProgressbarUndeterminedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarUndeterminedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarUndeterminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
