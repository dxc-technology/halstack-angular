import { NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DxcProgressbarComponent } from "./dxc-progressbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcProgressbarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [DxcProgressbarComponent],
})
export class DxcProgressbarModule {}
