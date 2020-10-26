import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { DxcDropdownComponent } from "./dxc-dropdown.component";

@NgModule({
  declarations: [DxcDropdownComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [DxcDropdownComponent],
})
export class DxcDropdownModule {}
