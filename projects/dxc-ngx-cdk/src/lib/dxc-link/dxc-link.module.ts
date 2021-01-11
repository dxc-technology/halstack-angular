import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcLinkComponent } from "./dxc-link.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcLinkComponent],
  imports: [CommonModule, DxcSvgModule],
  exports: [DxcLinkComponent],
})
export class DxcLinkModule {}
