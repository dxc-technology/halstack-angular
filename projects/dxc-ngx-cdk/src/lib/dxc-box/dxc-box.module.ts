import { NgModule } from '@angular/core';
import { DxcBoxComponent } from './dxc-box.component';
import { CommonModule } from '@angular/common';
import { CssUtils } from '../utils';

@NgModule({
  declarations: [DxcBoxComponent],
  imports: [CommonModule],
  exports: [DxcBoxComponent]
})
export class DxcBoxModule {}
