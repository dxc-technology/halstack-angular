import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcChipComponent } from "./dxc-chip.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcChipComponent],
  imports: [CommonModule, DxcSvgModule],
  exports: [DxcChipComponent],
})
export class DxcChipModule {}
