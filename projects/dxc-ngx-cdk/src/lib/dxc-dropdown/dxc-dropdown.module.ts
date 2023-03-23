import { NgModule } from "@angular/core";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
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
