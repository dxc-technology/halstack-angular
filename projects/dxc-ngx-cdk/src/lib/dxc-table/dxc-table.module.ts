import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { DxcTableComponent } from "./dxc-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcTableComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [DxcTableComponent],
})
export class DxcTableModule {}
