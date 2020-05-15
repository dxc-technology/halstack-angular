import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { DxcSliderComponent } from "./dxc-slider.component";
import { CommonModule } from "@angular/common";
import { DXCInputTextModule } from '../dxc-text-input/dxc-input-text.module';

@NgModule({
  declarations: [DxcSliderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    DXCInputTextModule
  ],
  exports: [DxcSliderComponent]
})
export class DxcSliderModule {}
