import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTablePropertiesComponent } from './switch-table-properties.component';

describe('SwitchTablePropertiesComponent', () => {
  let component: SwitchTablePropertiesComponent;
  let fixture: ComponentFixture<SwitchTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
