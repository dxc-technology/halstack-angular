import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { DxcCardComponent } from "./dxc-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [DxcCardComponent],
})
export class DxcCardModule {}
