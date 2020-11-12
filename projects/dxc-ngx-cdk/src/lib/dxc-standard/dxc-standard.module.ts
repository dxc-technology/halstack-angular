import { NgModule } from "@angular/core";
import { DxcStandardComponent } from "./dxc-standard.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcStandardComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcStandardComponent],
})
export class DxcStandardModule {}
