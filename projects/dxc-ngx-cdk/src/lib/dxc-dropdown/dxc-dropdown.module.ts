import { NgModule } from "@angular/core";
import {  MatMenuModule, MatButtonModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcDropdownComponent } from "./dxc-dropdown.component";

@NgModule({
  declarations: [DxcDropdownComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [DxcDropdownComponent]
})
export class DXCDropdownModule {}
