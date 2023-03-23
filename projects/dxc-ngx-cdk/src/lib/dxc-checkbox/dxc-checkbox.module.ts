import { NgModule } from "@angular/core";
import { MatLegacyCheckboxModule as MatCheckboxModule } from "@angular/material/legacy-checkbox";
import { FormsModule } from "@angular/forms";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../theme/theme.module";

@NgModule({
  declarations: [DxcCheckboxComponent],
  imports: [CommonModule, FormsModule, MatCheckboxModule, ThemeModule],
  exports: [DxcCheckboxComponent],
})
export class DxcCheckboxModule {}
