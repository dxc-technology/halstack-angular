import { NgModule } from "@angular/core";
import {  MatMenuModule, MatButtonModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcDropdownComponent],
  imports: [
    CommonModule, 
    MatMenuModule, 
    MatButtonModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcDropdownComponent]
})
export class DXCDropdownModule {}
