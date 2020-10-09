import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatSelectModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcSelectComponent } from "./dxc-select.component";
import { ThemeModule } from "../theme/theme.module";
@NgModule({
  declarations: [DxcSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ThemeModule,
    FormsModule,
  ],
  exports: [DxcSelectComponent],
})
export class DxcSelectModule {}
