import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { DxcButtonComponent } from './dxc-button.component';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [BrowserModule, MatButtonModule, MatIconModule],
  exports: [DxcButtonComponent]
})
export class DxcButtonModule {}
