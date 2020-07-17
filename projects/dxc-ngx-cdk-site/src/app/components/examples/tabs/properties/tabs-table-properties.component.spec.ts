import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTablePropertiesComponent } from './tabs-table-properties.component';

describe('TabsTablePropertiesComponent', () => {
  let component: TabsTablePropertiesComponent;
  let fixture: ComponentFixture<TabsTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
