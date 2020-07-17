import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTablePropertiesComponent } from './toggle-table-properties.component';

describe('ToggleTablePropertiesComponent', () => {
  let component: ToggleTablePropertiesComponent;
  let fixture: ComponentFixture<ToggleTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
