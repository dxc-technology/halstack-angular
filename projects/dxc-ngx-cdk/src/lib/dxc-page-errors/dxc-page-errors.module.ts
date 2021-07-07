import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPageErrorsComponent } from './dxc-page-errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DxcPageErrorsComponent],
  exports: [DxcPageErrorsComponent]
})
export class DxcPageErrorsModule {
  static forRoot() {
    return {
      ngModule: DxcPageErrorsModule
    };
  }
}
