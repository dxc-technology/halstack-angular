import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { DxcDialogComponent } from "./dxc-dialog.component";
import { DxcDialogHeaderComponent } from './dxc-dialog-header/dxc-dialog-header.component';
import { DxcDialogBodyComponent } from './dxc-dialog-body/dxc-dialog-body.component';

@NgModule({
  declarations: [DxcDialogComponent, DxcDialogHeaderComponent, DxcDialogBodyComponent],
  imports: [CommonModule, MatTooltipModule],
  exports: [DxcDialogComponent, DxcDialogHeaderComponent, DxcDialogBodyComponent],
})
export class DxcDialogModule {}
