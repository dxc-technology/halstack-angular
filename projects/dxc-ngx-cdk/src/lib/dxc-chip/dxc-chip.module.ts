import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcChipComponent } from "./dxc-chip.component";
import { DxcChipPrefixIconComponent } from './dxc-chip-prefix-icon/dxc-chip-prefix-icon.component';
import { DxcChipSuffixIconComponent } from './dxc-chip-suffix-icon/dxc-chip-suffix-icon.component';
@NgModule({
  declarations: [DxcChipComponent, DxcChipPrefixIconComponent,DxcChipSuffixIconComponent],
  imports: [CommonModule],
  exports: [DxcChipComponent, DxcChipPrefixIconComponent,DxcChipSuffixIconComponent],
})
export class DxcChipModule {}
