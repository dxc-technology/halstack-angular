import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { DxcLabelModule } from './../dxc-label/dxc-label.module';
import { DxcPageErrorsModule } from './../dxc-page-errors/dxc-page-errors.module';
import { DxcDialogModule } from './../dxc-dialog/dxc-dialog.module';
import { DxcInputTextModule } from './../dxc-text-input/dxc-input-text.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcActivationcodeComponent } from './dxc-activation-code.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DxcInputTextModule,
    DxcLabelModule, DxcButtonModule,
    DxcDialogModule, DxcPageErrorsModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [DxcActivationcodeComponent],
  exports: [DxcActivationcodeComponent]
})
export class DxcActivationCodeModule {
  static forRoot() {
    return {
      ngModule: DxcActivationCodeModule
    };
  }
 }
