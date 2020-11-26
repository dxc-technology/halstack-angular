import { NgModule } from "@angular/core";
import { DxcStandardLayoutComponent } from "./dxc-standard-layout.component";
import { CommonModule } from "@angular/common";
import { ObserversModule } from "@angular/cdk/observers";
import { DxcStandardLayoutMainComponent } from "./dxc-standard-layout-main/dxc-standard-layout-main.component";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav/dxc-standard-layout-sidenav.component";
import { DxcStandardLayoutHeaderComponent } from "./dxc-standard-layout-header/dxc-standard-layout-header.component";

@NgModule({
  declarations: [
    DxcStandardLayoutComponent,
    DxcStandardLayoutMainComponent,
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutHeaderComponent,
  ],
  imports: [CommonModule, ObserversModule],
  exports: [
    DxcStandardLayoutComponent,
    DxcStandardLayoutMainComponent,
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutHeaderComponent,
  ],
  providers: [],
})
export class DxcStandardLayoutModule {}
