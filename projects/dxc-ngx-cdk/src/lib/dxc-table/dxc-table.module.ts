import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { DxcTableComponent } from "./dxc-table.component";
import { CommonModule } from "@angular/common";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [DxcTableComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, BackgroundProviderModule],
  exports: [DxcTableComponent],
})
export class DxcTableModule {}
