import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcWizardComponent } from './dxc-wizard.component';

describe('DxcWizardComponent', () => {
  let component: DxcWizardComponent;
  let fixture: ComponentFixture<DxcWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
