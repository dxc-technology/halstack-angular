import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAssistiveComponent } from './accordion-assistive.component';

describe('AccordionAssistiveComponent', () => {
  let component: AccordionAssistiveComponent;
  let fixture: ComponentFixture<AccordionAssistiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAssistiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAssistiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
