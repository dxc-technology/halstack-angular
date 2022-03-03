import { NgModule } from "@angular/core";
import { DxcSidenavComponent } from "./dxc-sidenav.component";
import { CommonModule } from "@angular/common";
import { DxcSidenavTitleComponent } from "./dxc-sidenav-title/dxc-sidenav-title.component";
import { DxcSidenavSubtitleComponent } from "./dxc-sidenav-subtitle/dxc-sidenav-subtitle.component";
import { DxcSidenavLinkComponent } from "./dxc-sidenav-link/dxc-sidenav-link.component";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [
    DxcSidenavComponent,
    DxcSidenavTitleComponent,
    DxcSidenavSubtitleComponent,
    DxcSidenavLinkComponent,
  ],
  imports: [CommonModule, BackgroundProviderInnerModule],
  exports: [
    DxcSidenavComponent,
    DxcSidenavTitleComponent,
    DxcSidenavSubtitleComponent,
    DxcSidenavLinkComponent,
  ],
})
export class DxcSideNavModule {}
