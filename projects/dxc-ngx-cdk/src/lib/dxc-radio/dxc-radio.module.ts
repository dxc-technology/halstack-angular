import { NgModule } from '@angular/core';
import { DxcRadioComponent } from './dxc-radio.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [DxcRadioComponent],
  imports: [BrowserModule, FormsModule,MatRadioModule],
  exports: [DxcRadioComponent]
})
export class DxcRadioModule {}
