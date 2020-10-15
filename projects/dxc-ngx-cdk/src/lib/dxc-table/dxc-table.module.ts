import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DxcTableComponent } from "./dxc-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcTableComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [DxcTableComponent],
})
export class DxcTableModule {}
