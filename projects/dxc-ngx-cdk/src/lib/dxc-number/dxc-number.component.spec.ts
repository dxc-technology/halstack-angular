import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcNumberComponent } from './dxc-number.component';

describe('DxcNumberComponent', () => {
  let component: DxcNumberComponent;
  let fixture: ComponentFixture<DxcNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
