import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcInputNumberComponent } from "./dxc-input-number.component";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

@NgModule({
  declarations: [
    DxcInputNumberComponent,
  ],
  imports: [CommonModule, DxcNewInputTextModule],
  exports: [DxcInputNumberComponent],
})
export class DxcInputNumberModule {}
