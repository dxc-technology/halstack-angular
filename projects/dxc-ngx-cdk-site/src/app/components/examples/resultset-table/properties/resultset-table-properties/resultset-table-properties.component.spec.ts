import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsetTablePropertiesComponent } from './resultset-table-properties.component';

describe('ResultsetTablePropertiesComponent', () => {
  let component: ResultsetTablePropertiesComponent;
  let fixture: ComponentFixture<ResultsetTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsetTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsetTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
