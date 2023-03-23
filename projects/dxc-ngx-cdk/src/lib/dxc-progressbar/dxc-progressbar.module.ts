import { NgModule } from "@angular/core";
import { MatLegacyProgressBarModule as MatProgressBarModule } from "@angular/material/legacy-progress-bar";
import { DxcProgressbarComponent } from "./dxc-progressbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcProgressbarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [DxcProgressbarComponent],
})
export class DxcProgressbarModule {}
