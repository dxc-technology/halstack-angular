import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DxcButtonComponent } from "./dxc-button.component";
import { CommonModule } from "@angular/common";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, DxcSvgModule],
  exports: [DxcButtonComponent],
})
export class DxcButtonModule {}
