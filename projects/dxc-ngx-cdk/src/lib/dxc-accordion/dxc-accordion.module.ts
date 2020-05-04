import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { DxcAccordionComponent } from './dxc-accordion.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcAccordionComponent],
  imports: [
    CommonModule, 
    MatExpansionModule, 
    MatIconModule, 
    BrowserAnimationsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcAccordionComponent]
})
export class DxcAccordionModule {}
