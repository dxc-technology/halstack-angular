import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { DxcButtonModule, DxcHeadingModule, DxcNewInputTextModule, DxcNewSelectModule } from '@dxc-technology/halstack-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DxcNewSelectModule,
    DxcNewInputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DxcButtonModule,
    DxcHeadingModule
  ]
})
export class TestFormsModule { }
