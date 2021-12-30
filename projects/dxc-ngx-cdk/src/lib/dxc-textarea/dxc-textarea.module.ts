import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcTextareaComponent } from './dxc-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DxcTextareaComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DxcTextareaComponent,
  ],
})
export class DxcTextareaModule { }
