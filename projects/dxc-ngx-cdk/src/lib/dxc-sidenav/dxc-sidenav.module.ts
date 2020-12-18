import { NgModule } from "@angular/core";
import { DxcSidenavComponent } from "./dxc-sidenav.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DxcSidenavComponent,
  ],
  imports: [CommonModule],
  exports: [
    DxcSidenavComponent,
  ],
})
export class DxcSideNavModule {}
