import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPaginatorComponent } from './dxc-paginator.component';
import { DxcButtonModule } from '../dxc-button/dxc-button.module';

@NgModule({
  declarations: [
    DxcPaginatorComponent
  ],
  imports: [
    CommonModule,
    DxcButtonModule
  ],
  exports: [
    DxcPaginatorComponent
  ]
})
export class DxcPaginatorModule { }
