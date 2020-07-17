import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionControlledComponent } from './accordion-controlled.component';

describe('AccordionControlledComponent', () => {
  let component: AccordionControlledComponent;
  let fixture: ComponentFixture<AccordionControlledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionControlledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
