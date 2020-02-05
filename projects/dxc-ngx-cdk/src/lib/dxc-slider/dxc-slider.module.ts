import { NgModule } from "@angular/core";
import {
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { DxcSliderComponent } from "./dxc-slider.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcSliderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcSliderComponent]
})
export class DxcSliderModule {}
