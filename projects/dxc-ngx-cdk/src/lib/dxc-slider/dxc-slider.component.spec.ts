import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSliderComponent } from './dxc-slider.component';

describe('DxcSliderComponent', () => {
  let component: DxcSliderComponent;
  let fixture: ComponentFixture<DxcSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
