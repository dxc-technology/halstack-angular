import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardPreviewComponent } from './wizard-preview.component';

describe('WizardPreviewComponent', () => {
  let component: WizardPreviewComponent;
  let fixture: ComponentFixture<WizardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
