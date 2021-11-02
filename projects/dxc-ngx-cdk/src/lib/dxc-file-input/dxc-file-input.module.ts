import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcFileComponent } from './dxc-file/dxc-file.component';

@NgModule({
  declarations: [DxcFileInputComponent, DxcFileComponent],
  imports: [CommonModule, DxcButtonModule],
  exports: [DxcFileInputComponent],
})
export class DxcFileInputModule { }
