import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { DxcButtonComponent } from './dxc-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  exports: [DxcButtonComponent, MatButtonModule]
})
export class DxcButtonModule {}
