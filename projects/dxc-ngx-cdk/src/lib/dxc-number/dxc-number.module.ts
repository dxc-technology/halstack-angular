import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNumberComponent } from "./dxc-number.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

@NgModule({
  declarations: [
    DxcNumberComponent,
  ],
  imports: [CommonModule, DxcTextInputModule],
  exports: [
    DxcNumberComponent,
  ],
})
export class DxcNumberModule {}
