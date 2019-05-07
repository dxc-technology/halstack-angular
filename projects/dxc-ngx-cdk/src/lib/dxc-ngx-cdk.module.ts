import { NgModule } from '@angular/core';
import { DxcButtonComponent } from './dxc-button/dxc-button.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  exports: [
    DxcButtonComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class DxcNgxCdkModule {}
