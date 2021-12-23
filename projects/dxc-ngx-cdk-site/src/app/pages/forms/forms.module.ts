import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { DxcButtonModule, DxcHeadingModule, DxcNewInputTextModule } from '@dxc-technology/halstack-angular';
import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    DxcNewInputTextModule,
    DxcButtonModule,
    DxcHeadingModule
  ]
})
export class FormsModule { }
