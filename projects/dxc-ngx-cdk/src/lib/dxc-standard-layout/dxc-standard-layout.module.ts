import { NgModule } from "@angular/core";
import { DxcStandardLayoutComponent } from "./dxc-standard-layout.component";
import { CommonModule } from "@angular/common";
import { ObserversModule } from "@angular/cdk/observers";
import { DxcStandardLayoutMainComponent } from "./dxc-standard-layout-main/dxc-standard-layout-main.component";
import { DxcStandardLayoutSidenavComponent } from "./dxc-standard-layout-sidenav/dxc-standard-layout-sidenav.component";
import { DxcStandardLayoutHeaderComponent } from "./dxc-standard-layout-header/dxc-standard-layout-header.component";
import { DxcStandardLayoutFooterComponent } from './dxc-standard-layout-footer/dxc-standard-layout-footer.component';
import { DxcHeaderModule } from '../dxc-header/dxc-header.module';
import { DxcFooterModule } from '../dxc-footer/dxc-footer.module';

@NgModule({
  declarations: [
    DxcStandardLayoutComponent,
    DxcStandardLayoutMainComponent,
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutHeaderComponent,
    DxcStandardLayoutFooterComponent
  ],
  imports: [CommonModule, ObserversModule, DxcHeaderModule, DxcFooterModule],
  exports: [
    DxcStandardLayoutComponent,
    DxcStandardLayoutMainComponent,
    DxcStandardLayoutSidenavComponent,
    DxcStandardLayoutHeaderComponent,
    DxcStandardLayoutFooterComponent
  ],
  providers: [],
})
export class DxcStandardLayoutModule {}
