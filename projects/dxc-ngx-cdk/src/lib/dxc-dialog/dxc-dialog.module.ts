import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcDialogComponent } from "./dxc-dialog.component";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [CommonModule, BackgroundProviderInnerModule],
  exports: [DxcDialogComponent],
})
export class DxcDialogModule {}
