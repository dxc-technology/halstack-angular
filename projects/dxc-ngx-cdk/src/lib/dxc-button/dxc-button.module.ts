import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { DxcButtonComponent } from './dxc-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [BrowserModule, MatButtonModule, MatIconModule],
  exports: [DxcButtonComponent, MatButtonModule, MatIconModule]
})
export class DxcButtonModule {}
