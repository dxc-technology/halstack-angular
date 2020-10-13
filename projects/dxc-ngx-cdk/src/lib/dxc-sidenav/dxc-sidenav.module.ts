import { NgModule } from "@angular/core";
import { DxcSidenavComponent } from "./dxc-sidenav.component";
import { DxcSidenavMenuComponent } from "./dxc-sidenav-menu/dxc-sidenav-menu.component";
import { DxcSidenavContentComponent } from "./dxc-sidenav-content/dxc-sidenav-content.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DxcSidenavComponent,
    DxcSidenavMenuComponent,
    DxcSidenavContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    DxcSidenavComponent,
    DxcSidenavMenuComponent,
    DxcSidenavContentComponent,
  ],
})
export class DxcSideNavModule {}
