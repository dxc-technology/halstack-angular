import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTablePropertiesComponent } from './dropdown-table-properties.component';

describe('DropdownTablePropertiesComponent', () => {
  let component: DropdownTablePropertiesComponent;
  let fixture: ComponentFixture<DropdownTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
