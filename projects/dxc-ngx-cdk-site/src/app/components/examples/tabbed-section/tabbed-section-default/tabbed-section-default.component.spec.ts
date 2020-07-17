import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionDefaultComponent } from './tabbed-section-default.component';

describe('TabbedSectionDefaultComponent', () => {
  let component: TabbedSectionDefaultComponent;
  let fixture: ComponentFixture<TabbedSectionDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
