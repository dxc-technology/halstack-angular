import { NgModule } from "@angular/core";
import {
  MatFormFieldModule, MatInputModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTextInputComponent } from './dxc-input-text.component';
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcTextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcTextInputComponent]
})
export class DXCInputTextModule {}
