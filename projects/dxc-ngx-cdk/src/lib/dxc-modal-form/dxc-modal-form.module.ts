import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcModalFormComponent } from './dxc-modal-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DxcModalFormComponent],
  exports: [DxcModalFormComponent]
})
export class DxcModalFormModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DxcModalFormModule
    };
  }
 }
