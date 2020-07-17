import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAlternativeComponent } from './accordion-alternative.component';

describe('AccordionAlternativeComponent', () => {
  let component: AccordionAlternativeComponent;
  let fixture: ComponentFixture<AccordionAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
