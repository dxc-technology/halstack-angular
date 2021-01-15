import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { DxcCardComponent } from "./dxc-card.component";
import { CommonModule } from "@angular/common";
import { DxcCardImageComponent } from './dxc-card-image/dxc-card-image.component';

@NgModule({
  declarations: [DxcCardComponent, DxcCardImageComponent],
  imports: [CommonModule, MatCardModule],
  exports: [DxcCardComponent, DxcCardImageComponent],
})
export class DxcCardModule {}
