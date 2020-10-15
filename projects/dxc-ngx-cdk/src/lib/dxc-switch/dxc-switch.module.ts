import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSwitchComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  exports: [DxcSwitchComponent],
})
export class DxcSwitchModule {}
