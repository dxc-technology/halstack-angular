import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardThemedComponent } from './wizard-themed.component';

describe('WizardThemedComponent', () => {
  let component: WizardThemedComponent;
  let fixture: ComponentFixture<WizardThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
