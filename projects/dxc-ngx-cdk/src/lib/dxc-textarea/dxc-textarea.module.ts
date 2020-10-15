import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcTextareaComponent } from "./dxc-textarea.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

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
