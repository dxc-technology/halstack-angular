import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingTablePropertiesComponent } from './heading-table-properties.component';

describe('HeadingTablePropertiesComponent', () => {
  let component: HeadingTablePropertiesComponent;
  let fixture: ComponentFixture<HeadingTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
