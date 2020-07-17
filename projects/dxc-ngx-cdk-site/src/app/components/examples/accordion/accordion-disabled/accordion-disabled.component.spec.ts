import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDisabledComponent } from './accordion-disabled.component';

describe('AccordionDisabledComponent', () => {
  let component: AccordionDisabledComponent;
  let fixture: ComponentFixture<AccordionDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
