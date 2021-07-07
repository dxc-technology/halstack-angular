import { DxcTreeComponent } from './dxc-tree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DxcTreeComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcTreeComponent]
})
export class DxcTreeModule {
    static forRoot() {
      return {
        ngModule: DxcTreeModule
      };
    }
}
