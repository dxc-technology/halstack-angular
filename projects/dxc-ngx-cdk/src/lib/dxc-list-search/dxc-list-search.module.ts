import { DxcInputTextModule } from './../dxc-text-input/dxc-input-text.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcListSearchComponent } from './dxc-list-search.component';

@NgModule({
  imports: [
    CommonModule,
    DxcInputTextModule
  ],
  declarations: [DxcListSearchComponent],
  exports: [DxcListSearchComponent]
})
export class DxcListSearchModule {
  static forRoot() {
    return {
      ngModule: DxcListSearchModule
    };
  }
}
