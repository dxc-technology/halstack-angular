import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcDialogComponent } from "./dxc-dialog.component";

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcDialogComponent]
})
export class DxcDialogModule {}
