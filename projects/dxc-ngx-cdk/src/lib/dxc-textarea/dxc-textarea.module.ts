import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcTextareaComponent } from "./dxc-textarea.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";

@NgModule({
  declarations: [DxcTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
  ],
  exports: [DxcTextareaComponent],
})
export class DxcTextareaModule {}
