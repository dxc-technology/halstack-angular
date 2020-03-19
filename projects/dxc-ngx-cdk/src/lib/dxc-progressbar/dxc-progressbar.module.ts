import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material';
import { DxcProgressbarComponent } from './dxc-progressbar.component';
import { CommonModule } from '@angular/common';
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcProgressbarComponent],
  imports: [CommonModule, MatProgressBarModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })],
  exports: [DxcProgressbarComponent]
})
export class DxcProgressbarModule {}
