import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule } from "@angular/forms";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSwitchComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule, MatTooltipModule],
  exports: [DxcSwitchComponent],
})
export class DxcSwitchModule {}
