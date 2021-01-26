import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { DxcDropdownComponent } from "./dxc-dropdown.component";
import { DxcDropdownOptionComponent } from "./dxc-dropdown-option/dxc-dropdown-option.component";
import { DxcDropdownIconComponent } from "./dxc-dropdown-icon/dxc-dropdown-icon.component";

@NgModule({
  declarations: [
    DxcDropdownComponent,
    DxcDropdownOptionComponent,
    DxcDropdownIconComponent,
  ],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [
    DxcDropdownComponent,
    DxcDropdownOptionComponent,
    DxcDropdownIconComponent,
  ],
})
export class DxcDropdownModule {}
