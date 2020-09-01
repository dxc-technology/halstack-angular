import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcTextareaComponent } from './dxc-textarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatAutocompleteModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTextareaAutosize } from '@angular/material';

@NgModule({
  declarations: [DxcTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule
  ],
  exports: [DxcTextareaComponent]
})
export class DxcTextareaModule { }
