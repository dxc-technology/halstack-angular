import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTablePropertiesComponent } from './wizard-table-properties.component';

describe('WizardTablePropertiesComponent', () => {
  let component: WizardTablePropertiesComponent;
  let fixture: ComponentFixture<WizardTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
