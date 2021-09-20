import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcPasswordComponent } from "./dxc-password.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

@NgModule({
  declarations: [DxcPasswordComponent],
  imports: [CommonModule, DxcNewInputTextModule],
  exports: [DxcPasswordComponent],
})
export class DxcPasswordModule {}
