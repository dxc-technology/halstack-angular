import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNumberInputComponent } from "./dxc-number-input.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

@NgModule({
  declarations: [
    DxcNumberInputComponent,
  ],
  imports: [CommonModule, DxcTextInputModule],
  exports: [
    DxcNumberInputComponent,
  ],
})
export class DxcNumberInputModule {}
