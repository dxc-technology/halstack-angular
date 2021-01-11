import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTextInputComponent } from "./dxc-input-text.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcTextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    DxcSvgModule
  ],
  exports: [DxcTextInputComponent],
})
export class DxcInputTextModule {}
