import { DxcResourcePipe } from './dxc-resource.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DxcResourcePipe],
  exports: [DxcResourcePipe]
})
export class DxcResourceModule {
  static forRoot() {
    return {
      ngModule: DxcResourceModule
    };
  }
}
