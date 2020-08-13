import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPreviewComponent } from './color-preview.component';

@NgModule({
  declarations: [ColorPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColorPreviewComponent
  ]
})
export class ColorPreviewModule { }
