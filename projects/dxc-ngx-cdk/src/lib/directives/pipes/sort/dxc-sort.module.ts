import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSortByPipe } from './dxc-sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DxcSortByPipe],
  exports: [DxcSortByPipe]
})
export class DxcSortModule {
  static forRoot() {
    return {
      ngModule: DxcSortModule
    };
  }
}
