import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcPaginatorComponent } from "./dxc-paginator.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { V3DxcSelectModule } from "../v3-dxc-select/select-module";

@NgModule({
  declarations: [DxcPaginatorComponent],
  imports: [CommonModule, DxcButtonModule, V3DxcSelectModule],
  exports: [DxcPaginatorComponent],
})
export class DxcPaginatorModule {}
