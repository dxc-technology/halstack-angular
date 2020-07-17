import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionIconComponent } from './accordion-icon.component';

describe('AccordionIconComponent', () => {
  let component: AccordionIconComponent;
  let fixture: ComponentFixture<AccordionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
