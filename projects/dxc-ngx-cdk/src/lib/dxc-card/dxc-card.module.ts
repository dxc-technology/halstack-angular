import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { DxcCardComponent } from './dxc-card.component';
import { CommonModule } from '@angular/common';
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcCardComponent],
  imports: [
    CommonModule, 
    MatCardModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcCardComponent]
})
export class DxcCardModule {}
