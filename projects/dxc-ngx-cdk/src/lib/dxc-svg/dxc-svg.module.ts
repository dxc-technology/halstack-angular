import { NgModule } from "@angular/core";
import { DxcSvg } from "./dxc-svg.component";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSvg],
  imports: [CommonModule, FormsModule],
  exports: [DxcSvg],
})
export class DxcSvgModule {}
