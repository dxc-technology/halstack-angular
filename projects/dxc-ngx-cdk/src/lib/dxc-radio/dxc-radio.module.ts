import { NgModule } from "@angular/core";
import { DxcRadioComponent } from "./dxc-radio.component";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material";
import { ThemeModule, defaultTheme } from '../theme';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DxcRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcRadioComponent]
})
export class DxcRadioModule {}
