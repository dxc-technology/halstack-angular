import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { DxcButtonComponent } from "./dxc-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [DxcButtonComponent],
})
export class DxcButtonModule {}
