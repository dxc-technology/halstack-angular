import { NgModule } from "@angular/core";
import { DxcBoxComponent } from "./dxc-box.component";
import { CommonModule } from "@angular/common";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcBoxComponent],
  imports: [CommonModule, BackgroundProviderInnerModule],
  exports: [DxcBoxComponent],
})
export class DxcBoxModule {}
