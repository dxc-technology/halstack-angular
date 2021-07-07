import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNumberComponent } from './dxc-number.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NumbersOnlyModule } from '../directives/numbersonly/numbers-only.module';

@NgModule({
  declarations: [DxcNumberComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    NumbersOnlyModule
  ],
  exports: [DxcNumberComponent]
})
export class DxcNumberModule {
  static forRoot() {
    return {
      ngModule: DxcNumberModule
    };
  }
}
