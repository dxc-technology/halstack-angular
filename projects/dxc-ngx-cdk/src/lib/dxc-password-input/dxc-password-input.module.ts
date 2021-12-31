import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcPasswordInputComponent } from "./dxc-password-input.component";
import { DxcTextInputModule } from "../dxc-text-input/dxc-text-input.module";

@NgModule({
  declarations: [DxcPasswordInputComponent],
  imports: [CommonModule, DxcTextInputModule],
  exports: [DxcPasswordInputComponent],
})
export class DxcPasswordInputModule {}
