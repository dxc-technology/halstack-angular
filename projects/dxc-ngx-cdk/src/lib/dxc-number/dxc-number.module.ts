import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNumberComponent } from "./dxc-number.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

@NgModule({
  declarations: [
    DxcNumberComponent,
  ],
  imports: [CommonModule, DxcNewInputTextModule],
  exports: [
    DxcNumberComponent,
  ],
})
export class DxcNumberModule {}
