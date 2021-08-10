import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNewInputPasswordComponent } from "./dxc-new-input-password.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

@NgModule({
  declarations: [DxcNewInputPasswordComponent],
  imports: [CommonModule, DxcNewInputTextModule],
  exports: [DxcNewInputPasswordComponent],
})
export class DxcNewInputPasswordModule {}
