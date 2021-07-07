import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  DxcTreeComponent } from './dxc-tree.component';

describe('OrgTreeComponent', () => {
  let component: DxcTreeComponent;
  let fixture: ComponentFixture<DxcTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
