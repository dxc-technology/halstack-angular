import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDefaultComponent } from './accordion-default.component';

describe('AccordionDefaultComponent', () => {
  let component: AccordionDefaultComponent;
  let fixture: ComponentFixture<AccordionDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
