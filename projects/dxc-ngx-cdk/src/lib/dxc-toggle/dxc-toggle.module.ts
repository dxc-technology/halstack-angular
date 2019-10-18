import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcToggleComponent } from './dxc-toggle.component';

@NgModule({
  declarations: [DxcToggleComponent],
  imports: [CommonModule, MatButtonToggleModule],
  exports: [DxcToggleComponent]
})
export class DXCToggleModule {}
