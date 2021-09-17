import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcChartComponent } from './dxc-chart.component';

describe('DxcChartComponent', () => {
  let component: DxcChartComponent;
  let fixture: ComponentFixture<DxcChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
