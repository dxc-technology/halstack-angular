import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePropertiesComponent } from './table-properties.component';

describe('TablePropertiesComponent', () => {
  let component: TablePropertiesComponent;
  let fixture: ComponentFixture<TablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
