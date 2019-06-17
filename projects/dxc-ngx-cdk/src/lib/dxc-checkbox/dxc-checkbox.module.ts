import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DxcCheckboxComponent } from './dxc-checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DxcCheckboxComponent],
  imports: [CommonModule, MatCheckboxModule, FormsModule],
  exports: [DxcCheckboxComponent]
})
export class DxcCheckboxModule {}
