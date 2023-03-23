import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatIconModule } from "@angular/material/icon";
import { DxcButtonComponent } from "./dxc-button.component";
import { CommonModule } from "@angular/common";
import { DxcButtonIconComponent } from './dxc-button-icon/dxc-button-icon.component';

@NgModule({
  declarations: [DxcButtonComponent, DxcButtonIconComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [DxcButtonComponent, DxcButtonIconComponent],
})
export class DxcButtonModule {}
