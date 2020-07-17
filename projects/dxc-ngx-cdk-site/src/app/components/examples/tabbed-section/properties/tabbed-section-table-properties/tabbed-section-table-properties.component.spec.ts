import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionTablePropertiesComponent } from './tabbed-section-table-properties.component';

describe('TabbedSectionTablePropertiesComponent', () => {
  let component: TabbedSectionTablePropertiesComponent;
  let fixture: ComponentFixture<TabbedSectionTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
