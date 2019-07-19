import { NgModule } from "@angular/core";
import {
  MatFormFieldModule, MatInputModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTextInputComponent } from './dxc-input-text.component';

@NgModule({
  declarations: [DxcTextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [DxcTextInputComponent]
})
export class DXCInputTextModule {}
