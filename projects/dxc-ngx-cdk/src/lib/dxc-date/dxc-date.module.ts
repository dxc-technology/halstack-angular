import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { DxcDateComponent } from './dxc-date.component';

@NgModule({
  declarations: [DxcDateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  exports: [DxcDateComponent]
})
export class DxcDateModule {}
