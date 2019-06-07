import { NgModule } from "@angular/core";
import {
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DxcSliderComponent } from "./dxc-slider.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSliderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [DxcSliderComponent]
})
export class DxcSliderModule {}
