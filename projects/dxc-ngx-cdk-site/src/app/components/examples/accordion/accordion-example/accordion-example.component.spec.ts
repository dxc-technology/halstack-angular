import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExampleComponent } from './accordion-example.component';

describe('AccordionExampleComponent', () => {
  let component: AccordionExampleComponent;
  let fixture: ComponentFixture<AccordionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
