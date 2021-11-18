import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNewSelectComponent } from './dxc-new-select.component';
import { DxcCheckboxModule } from '../dxc-checkbox/dxc-checkbox.module';

@NgModule({
  declarations: [DxcNewSelectComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
  ],
  exports: [
    DxcNewSelectComponent,
  ],
})
export class DxcNewSelectModule { }
