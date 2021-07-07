import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSafePipe } from './dxc-safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DxcSafePipe],
  exports: [DxcSafePipe]
})
export class DxcSafeModule {
  static forRoot() {
    return {
      ngModule: DxcSafeModule
    };
  }
}
