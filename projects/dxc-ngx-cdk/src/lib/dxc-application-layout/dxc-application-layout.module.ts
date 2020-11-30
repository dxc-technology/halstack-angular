import { NgModule } from "@angular/core";
import { DxcApplicationLayoutComponent } from "./dxc-application-layout.component";
import { CommonModule } from "@angular/common";
import { ObserversModule } from "@angular/cdk/observers";
import { DxcApplicationLayoutMainComponent } from "./dxc-application-layout-main/dxc-application-layout-main.component";
import { DxcApplicationLayoutSidenavComponent } from "./dxc-application-layout-sidenav/dxc-application-layout-sidenav.component";
import { DxcApplicationLayoutHeaderComponent } from "./dxc-application-layout-header/dxc-application-layout-header.component";
import { DxcApplicationLayoutFooterComponent } from './dxc-application-layout-footer/dxc-application-layout-footer.component';
import { DxcHeaderModule } from '../dxc-header/dxc-header.module';
import { DxcFooterModule } from '../dxc-footer/dxc-footer.module';

@NgModule({
  declarations: [
    DxcApplicationLayoutComponent,
    DxcApplicationLayoutMainComponent,
    DxcApplicationLayoutSidenavComponent,
    DxcApplicationLayoutHeaderComponent,
    DxcApplicationLayoutFooterComponent
  ],
  imports: [CommonModule, ObserversModule, DxcHeaderModule, DxcFooterModule],
  exports: [
    DxcApplicationLayoutComponent,
    DxcApplicationLayoutMainComponent,
    DxcApplicationLayoutSidenavComponent,
    DxcApplicationLayoutHeaderComponent,
    DxcApplicationLayoutFooterComponent
  ],
  providers: [],
})
export class DxcApplicationLayoutModule {}
