import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcChartComponent } from './dxc-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [DxcChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [DxcChartComponent]
})
export class DxcChartModule { }
