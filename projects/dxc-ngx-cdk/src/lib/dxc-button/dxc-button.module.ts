import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { DxcButtonComponent } from './dxc-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [DxcButtonComponent, MatButtonModule]
})
export class DxcButtonModule {}
