import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcDialogHeaderComponent } from './dxc-dialog-header.component';

describe('DxcDialogHeaderComponent', () => {
  let component: DxcDialogHeaderComponent;
  let fixture: ComponentFixture<DxcDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcDialogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
