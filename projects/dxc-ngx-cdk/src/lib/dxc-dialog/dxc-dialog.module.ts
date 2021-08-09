import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcDialogComponent } from "./dxc-dialog.component";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [CommonModule, BackgroundProviderModule],
  exports: [DxcDialogComponent],
})
export class DxcDialogModule {}
