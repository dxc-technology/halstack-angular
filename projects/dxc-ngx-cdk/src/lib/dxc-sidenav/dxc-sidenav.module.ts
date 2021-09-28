import { NgModule } from "@angular/core";
import { DxcSidenavComponent } from "./dxc-sidenav.component";
import { CommonModule } from "@angular/common";
import { DxcSidenavTitleComponent } from './dxc-sidenav-title/dxc-sidenav-title.component';
import { DxcSidenavSubtitleComponent } from './dxc-sidenav-subtitle/dxc-sidenav-subtitle.component';
import { DxcSidenavLinkComponent } from './dxc-sidenav-link/dxc-sidenav-link.component';
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [
    DxcSidenavComponent,
    DxcSidenavTitleComponent,
    DxcSidenavSubtitleComponent,
    DxcSidenavLinkComponent
  ],
  imports: [CommonModule, BackgroundProviderModule],
  exports: [
    DxcSidenavComponent,
    DxcSidenavTitleComponent,
    DxcSidenavSubtitleComponent,
    DxcSidenavLinkComponent
  ],
})
export class DxcSideNavModule {}
