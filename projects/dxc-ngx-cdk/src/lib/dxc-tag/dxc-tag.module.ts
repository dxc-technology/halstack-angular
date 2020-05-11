import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcTagComponent } from './dxc-tag.component';
import { DxcBoxComponent } from '../dxc-box/dxc-box.component';
import { DxcBoxModule } from '../dxc-box/dxc-box.module';

@NgModule({
  declarations: [DxcTagComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DxcBoxModule
  ],
  exports: [DxcTagComponent],
  entryComponents: [DxcBoxComponent]
})
export class DxcTagModule {}
