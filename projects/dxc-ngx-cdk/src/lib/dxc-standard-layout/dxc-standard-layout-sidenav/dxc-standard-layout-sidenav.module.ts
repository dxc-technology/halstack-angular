import { NgModule } from "@angular/core";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DxcStandardLayoutSidenavComponent,
  ],
  imports: [CommonModule],
  exports: [
    DxcStandardLayoutSidenavComponent,
  ],
})
export class DxcStandardLayoutSidenavModule {}
