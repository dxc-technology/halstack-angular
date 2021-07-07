import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { DxcPaginatorComponent } from "./dxc-paginator.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcSelectModule } from "../dxc-select/select-module";

@NgModule({
  declarations: [DxcPaginatorComponent],
  imports: [CommonModule, DxcButtonModule, DxcSelectModule, MatIconModule],
  exports: [DxcPaginatorComponent],
})
export class DxcPaginatorModule {}
