import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { DxcDateComponent } from './dxc-date.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DxcDateComponent],
  imports: [
    CommonModule,
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
 