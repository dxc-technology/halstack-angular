import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DialogTablePropertiesComponent} from './dialog-table-properties.component';

describe('DialogTablePropertiesComponent', () => {
  let component: DialogTablePropertiesComponent;
  let fixture: ComponentFixture<DialogTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
