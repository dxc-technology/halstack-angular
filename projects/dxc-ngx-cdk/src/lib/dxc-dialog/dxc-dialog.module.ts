import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from '@angular/material/tooltip';
import { DxcDialogComponent } from "./dxc-dialog.component";

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [CommonModule, MatTooltipModule],
  exports: [DxcDialogComponent],
})
export class DxcDialogModule {}
