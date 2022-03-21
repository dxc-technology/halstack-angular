import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { DxcTableComponent } from "./dxc-table.component";
import { CommonModule } from "@angular/common";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BackgroundProviderInnerModule,
  ],
  exports: [DxcTableComponent],
})
export class DxcTableModule {}
