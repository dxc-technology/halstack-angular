import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcLabelComponent } from './dxc-label.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [DxcLabelComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [DxcLabelComponent]
})
export class DxcLabelModule {
  static forRoot() {
    return {
      ngModule: DxcLabelModule
    };
  }
}
