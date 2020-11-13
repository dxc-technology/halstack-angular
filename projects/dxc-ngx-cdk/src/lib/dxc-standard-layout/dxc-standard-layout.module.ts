import { NgModule } from "@angular/core";
import { DxcStandardLayoutComponent } from "./dxc-standard-layout.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcStandardLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcStandardLayoutComponent],
})
export class DxcStandardLayoutModule {}
