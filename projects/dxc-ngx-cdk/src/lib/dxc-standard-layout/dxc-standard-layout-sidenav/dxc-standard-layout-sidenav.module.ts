import { NgModule } from "@angular/core";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav.component";
import { DxcStandardLayoutSidenavMenuComponent } from "./dxc-standard-layout-sidenav-menu/dxc-standard-layout-sidenav-menu.component";
import { DxcStandardLayoutSidenavContentComponent } from "./dxc-standard-layout-sidenav-content/dxc-standard-layout-sidenav-content.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutSidenavMenuComponent,
    DxcStandardLayoutSidenavContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutSidenavMenuComponent,
    DxcStandardLayoutSidenavContentComponent,
  ],
})
export class DxcStandardLayoutSidenavModule {}
