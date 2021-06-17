import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPreviewComponent } from './accordion-preview.component';

describe('AccordionPreviewComponent', () => {
  let component: AccordionPreviewComponent;
  let fixture: ComponentFixture<AccordionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
