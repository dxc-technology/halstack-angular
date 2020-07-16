import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTablePropertiesComponent } from './accordion-table-properties.component';

describe('AccordionTablePropertiesComponent', () => {
  let component: AccordionTablePropertiesComponent;
  let fixture: ComponentFixture<AccordionTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
