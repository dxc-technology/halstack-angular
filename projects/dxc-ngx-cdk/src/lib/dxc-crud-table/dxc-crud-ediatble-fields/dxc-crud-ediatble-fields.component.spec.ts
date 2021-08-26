import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCrudEdiatbleFieldsComponent } from './dxc-crud-ediatble-fields.component';

describe('DxcCrudEdiatbleFieldsComponent', () => {
  let component: DxcCrudEdiatbleFieldsComponent;
  let fixture: ComponentFixture<DxcCrudEdiatbleFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcCrudEdiatbleFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCrudEdiatbleFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
