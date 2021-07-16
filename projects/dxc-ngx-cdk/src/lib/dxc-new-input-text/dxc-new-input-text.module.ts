import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNewInputTextComponent } from './dxc-new-input-text.component';
import { DxcNewInputTextActionComponent } from './dxc-new-input-text-action/dxc-new-input-text-action.component';



@NgModule({
  declarations: [DxcNewInputTextComponent, DxcNewInputTextActionComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcNewInputTextComponent, DxcNewInputTextActionComponent]
})
export class DxcNewInputTextModule { }
