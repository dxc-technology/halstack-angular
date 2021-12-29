import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { DxcSliderComponent } from "./dxc-slider.component";
import { CommonModule } from "@angular/common";
import { DxcInputTextModule } from "../dxc-input-text/dxc-input-text.module";

@NgModule({
  declarations: [DxcSliderComponent],
  imports: [CommonModule, MatSliderModule, FormsModule, DxcInputTextModule],
  exports: [DxcSliderComponent],
})
export class DxcSliderModule {}
