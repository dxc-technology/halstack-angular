import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { DxcFooterComponent } from "./dxc-footer.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcFooterComponent],
  imports: [CommonModule, MatToolbarModule, DxcSvgModule],
  exports: [DxcFooterComponent],
})
export class DxcFooterModule {}
