import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule, MatIconModule } from "@angular/material";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
  exports: [DxcSpinnerComponent],
})
export class DxcSpinnerModule {}
