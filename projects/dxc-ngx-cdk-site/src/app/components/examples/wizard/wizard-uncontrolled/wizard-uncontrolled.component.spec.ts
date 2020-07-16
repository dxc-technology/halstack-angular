import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardUncontrolledComponent } from './wizard-uncontrolled.component';

describe('WizardUncontrolledComponent', () => {
  let component: WizardUncontrolledComponent;
  let fixture: ComponentFixture<WizardUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
