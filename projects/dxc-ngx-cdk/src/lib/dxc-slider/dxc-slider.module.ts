import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { DxcSliderComponent } from "./dxc-slider.component";
import { CommonModule } from "@angular/common";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

@NgModule({
  declarations: [DxcSliderComponent],
  imports: [CommonModule, MatSliderModule, FormsModule, DxcTextInputModule],
  exports: [DxcSliderComponent],
})
export class DxcSliderModule {}
