import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcSelectComponent } from './dxc-select.component';
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcSelectComponent]
})
export class DXCSelectModule {}
