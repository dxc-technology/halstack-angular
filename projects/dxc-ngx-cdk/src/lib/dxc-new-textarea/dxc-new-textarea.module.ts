import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNewTextareaComponent } from './dxc-new-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DxcNewTextareaComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DxcNewTextareaComponent,
  ],
})
export class DxcNewTextareaModule { }
