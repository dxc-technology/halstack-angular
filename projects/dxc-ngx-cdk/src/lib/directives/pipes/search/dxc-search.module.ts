import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSearchPipe } from './dxc-search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DxcSearchPipe],
  exports: [DxcSearchPipe]
})
export class DxcSearchModule {
  static forRoot() {
    return {
      ngModule: DxcSearchModule
    };
  }
}
