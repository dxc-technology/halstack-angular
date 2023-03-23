import { NgModule } from "@angular/core";
import { MatLegacySlideToggleModule as MatSlideToggleModule } from "@angular/material/legacy-slide-toggle";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";
import { FormsModule } from "@angular/forms";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSwitchComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule, MatTooltipModule],
  exports: [DxcSwitchComponent],
})
export class DxcSwitchModule {}
