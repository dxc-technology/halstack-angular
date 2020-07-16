import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDarkComponent } from './accordion-dark.component';

describe('AccordionDarkComponent', () => {
  let component: AccordionDarkComponent;
  let fixture: ComponentFixture<AccordionDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
