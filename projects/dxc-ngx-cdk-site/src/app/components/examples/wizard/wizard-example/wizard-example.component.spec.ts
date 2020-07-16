import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardExampleComponent } from './wizard-example.component';

describe('WizardExampleComponent', () => {
  let component: WizardExampleComponent;
  let fixture: ComponentFixture<WizardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
