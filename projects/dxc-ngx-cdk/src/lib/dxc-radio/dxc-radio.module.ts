import { NgModule } from "@angular/core";
import { DxcRadioComponent } from "./dxc-radio.component";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcRadioComponent],
  imports: [CommonModule, FormsModule, MatRadioModule],
  exports: [DxcRadioComponent],
})
export class DxcRadioModule {}
