import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSizeDetectorComponent } from './dxc-size-detector.component';

describe('DxcSizeDetectorComponent', () => {
  let component: DxcSizeDetectorComponent;
  let fixture: ComponentFixture<DxcSizeDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSizeDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSizeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
