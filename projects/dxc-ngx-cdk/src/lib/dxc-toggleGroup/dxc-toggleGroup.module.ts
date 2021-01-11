import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { DxcToggleGroupComponent } from "./dxc-toggleGroup.component";
import { DxcToggleComponent } from "./dxc-toggle/dxc-toggle.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcToggleGroupComponent, DxcToggleComponent],
  imports: [CommonModule, MatIconModule, DxcSvgModule],
  exports: [DxcToggleGroupComponent, DxcToggleComponent],
  entryComponents: [],
})
export class DxcToggleGroupModule {}
