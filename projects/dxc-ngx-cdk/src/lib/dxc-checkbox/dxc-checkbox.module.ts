import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DxcCheckboxComponent } from './dxc-checkbox.component';

@NgModule({
  declarations: [DxcCheckboxComponent],
  imports: [BrowserModule, MatCheckboxModule, FormsModule],
  exports: [DxcCheckboxComponent]
})
export class DxcCheckboxModule {}
