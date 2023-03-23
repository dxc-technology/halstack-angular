import { NgModule } from "@angular/core";
import { DxcRadioComponent } from "./dxc-radio.component";
import { FormsModule } from "@angular/forms";
import { MatLegacyRadioModule as MatRadioModule } from "@angular/material/legacy-radio";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcRadioComponent],
  imports: [CommonModule, FormsModule, MatRadioModule],
  exports: [DxcRadioComponent],
})
export class DxcRadioModule {}
