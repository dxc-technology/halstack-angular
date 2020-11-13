import { NgModule } from "@angular/core";
import { DxcStandardLayoutMainComponent} from "./dxc-standard-layout-main.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcStandardLayoutMainComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcStandardLayoutMainComponent],
})
export class DxcStandardLayoutMainModule {}
