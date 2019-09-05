import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcHeaderComponent } from './dxc-header.component';

@NgModule({
  declarations: [DxcHeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [DxcHeaderComponent]
})
export class DXCHeaderModule {}
