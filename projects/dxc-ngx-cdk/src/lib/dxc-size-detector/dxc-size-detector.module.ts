import { SCREEN_SIZE } from './../services/sizedetector/dxc-size-detector.enum';
import { DxcResizeService } from './../services/sizedetector/dxc-size-detector.service';
import { DxcSizeDetectorComponent } from './dxc-size-detector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DxcSizeDetectorComponent],
  imports: [
    CommonModule
  ]
  , exports: [DxcSizeDetectorComponent]
})
export class DxcSizeDetectorModule {
  static forRoot() {
    return {
      ngModule: DxcSizeDetectorModule,
      providers: [DxcResizeService, SCREEN_SIZE]
    };
  }
}
