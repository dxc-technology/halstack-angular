import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardVerticalComponent } from './wizard-vertical.component';

describe('WizardVerticalComponent', () => {
  let component: WizardVerticalComponent;
  let fixture: ComponentFixture<WizardVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
