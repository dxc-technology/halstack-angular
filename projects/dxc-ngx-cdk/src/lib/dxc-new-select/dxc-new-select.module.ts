import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNewSelectComponent } from './dxc-new-select.component';
import { DxcCheckboxModule } from '../dxc-checkbox/dxc-checkbox.module';
import { DxcNewSelectOptionComponent } from './dxc-new-select-option/dxc-new-select-option.component';

@NgModule({
  declarations: [DxcNewSelectComponent, DxcNewSelectOptionComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
  ],
  exports: [
    DxcNewSelectComponent,
  ],
})
export class DxcNewSelectModule { }
