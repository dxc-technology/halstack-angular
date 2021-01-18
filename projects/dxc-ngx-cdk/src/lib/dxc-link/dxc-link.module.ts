import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcLinkComponent } from "./dxc-link.component";
import { DxcLinkIconComponent } from './dxc-link-icon/dxc-link-icon.component';

@NgModule({
  declarations: [DxcLinkComponent, DxcLinkIconComponent],
  imports: [CommonModule],
  exports: [DxcLinkComponent, DxcLinkIconComponent],
})
export class DxcLinkModule {}
