import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcDialogBodyComponent } from './dxc-dialog-body.component';

describe('DxcDialogBodyComponent', () => {
  let component: DxcDialogBodyComponent;
  let fixture: ComponentFixture<DxcDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
