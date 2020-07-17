import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerTablePropertiesComponent } from './spinner-table-properties.component';

describe('SpinnerTablePropertiesComponent', () => {
  let component: SpinnerTablePropertiesComponent;
  let fixture: ComponentFixture<SpinnerTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
