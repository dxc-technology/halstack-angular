import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTimePickerComponent } from './dxc-time-picker-cron.component';

describe('DxcTimePickerComponent', () => {
  let component: DxcTimePickerComponent;
  let fixture: ComponentFixture<DxcTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcTimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
