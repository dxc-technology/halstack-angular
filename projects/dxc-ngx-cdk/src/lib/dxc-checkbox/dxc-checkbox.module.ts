import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { DxcCheckboxComponent } from './dxc-checkbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DxcCheckboxComponent],
  imports: [BrowserModule, MatCheckboxModule, FormsModule],
  exports: [DxcCheckboxComponent, MatCheckboxModule]
})
export class DxcCheckboxModule {}
