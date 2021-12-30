import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcPasswordComponent } from "./dxc-password.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

@NgModule({
  declarations: [DxcPasswordComponent],
  imports: [CommonModule, DxcTextInputModule],
  exports: [DxcPasswordComponent],
})
export class DxcPasswordModule {}
