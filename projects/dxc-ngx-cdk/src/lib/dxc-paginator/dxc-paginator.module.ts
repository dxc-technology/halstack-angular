import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcPaginatorComponent } from "./dxc-paginator.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcSelectModule } from "../dxc-select/dxc-select.module";

@NgModule({
  declarations: [DxcPaginatorComponent],
  imports: [CommonModule, DxcButtonModule, DxcSelectModule],
  exports: [DxcPaginatorComponent],
})
export class DxcPaginatorModule {}
