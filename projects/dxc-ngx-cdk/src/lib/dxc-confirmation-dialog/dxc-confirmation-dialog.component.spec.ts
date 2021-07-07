import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcConfirmationDialogComponent } from './dxc-confirmation-dialog.component';

describe('DxcConfirmationDialogComponent', () => {
  let component: DxcConfirmationDialogComponent;
  let fixture: ComponentFixture<DxcConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
