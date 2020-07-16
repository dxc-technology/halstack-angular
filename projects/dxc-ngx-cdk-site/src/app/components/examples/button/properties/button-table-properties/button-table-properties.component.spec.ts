import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTablePropertiesComponent } from './button-table-properties.component';

describe('ButtonTablePropertiesComponent', () => {
  let component: ButtonTablePropertiesComponent;
  let fixture: ComponentFixture<ButtonTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
