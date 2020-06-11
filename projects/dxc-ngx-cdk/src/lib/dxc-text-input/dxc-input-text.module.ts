import { NgModule } from "@angular/core";
import {
  MatFormFieldModule, MatInputModule, MatAutocompleteModule
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
    FormsModule,
    MatAutocompleteModule
  ],
  exports: [DxcTextInputComponent]
})
export class DXCInputTextModule {}
