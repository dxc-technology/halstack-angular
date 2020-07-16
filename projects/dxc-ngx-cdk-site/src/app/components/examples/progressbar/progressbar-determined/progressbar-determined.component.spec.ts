import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDeterminedComponent } from './progressbar-determined.component';

describe('ProgressbarDeterminedComponent', () => {
  let component: ProgressbarDeterminedComponent;
  let fixture: ComponentFixture<ProgressbarDeterminedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarDeterminedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarDeterminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
