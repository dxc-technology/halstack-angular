import { NgModule } from "@angular/core";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTextInputComponent } from "./dxc-input-text.component";
import { DxcInputPrefixIconComponent } from './dxc-input-prefix-icon/dxc-input-prefix-icon.component';
import { DxcInputSuffixIconComponent } from './dxc-input-suffix-icon/dxc-input-suffix-icon.component';

@NgModule({
  declarations: [DxcTextInputComponent, DxcInputPrefixIconComponent, DxcInputSuffixIconComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
  ],
  exports: [DxcTextInputComponent, DxcInputPrefixIconComponent, DxcInputSuffixIconComponent],
})
export class DxcInputTextModule {}
