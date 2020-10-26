import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
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
