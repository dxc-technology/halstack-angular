import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DxcButtonComponent } from "./dxc-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [DxcButtonComponent],
})
export class DxcButtonModule {}
