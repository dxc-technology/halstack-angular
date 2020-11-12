import { NgModule } from "@angular/core";
import { DxcMainComponent } from "./dxc-main.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcMainComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcMainComponent],
})
export class DxcMainModule {}
