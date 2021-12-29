import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { V3DxcTextareaComponent } from "./v3-dxc-textarea.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [V3DxcTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
  ],
  exports: [V3DxcTextareaComponent],
})
export class V3DxcTextareaModule {}
