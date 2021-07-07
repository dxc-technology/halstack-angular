import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcToolbarComponent } from './dxc-toolbar.component';

@NgModule({
  declarations: [DxcToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DxcButtonModule,
    MatTooltipModule
  ],
  exports: [DxcToolbarComponent]
})
export class DxcToolbarModule {
  static forRoot() {
    return {
      ngModule: DxcToolbarModule
    };
  }
}
