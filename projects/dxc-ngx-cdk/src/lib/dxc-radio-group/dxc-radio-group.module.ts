import { NgModule } from "@angular/core";
import { DxcRadioGroupComponent } from "./dxc-radio-group.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcRadioComponent } from "./dxc-radio/dxc-radio.component";

@NgModule({
  declarations: [DxcRadioGroupComponent, DxcRadioComponent],
  imports: [CommonModule, FormsModule],
  exports: [DxcRadioGroupComponent],
})
export class DxcRadioGroupModule {}
