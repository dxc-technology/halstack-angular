import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDefaultComponent } from './wizard-default.component';

describe('WizardDefaultComponent', () => {
  let component: WizardDefaultComponent;
  let fixture: ComponentFixture<WizardDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
