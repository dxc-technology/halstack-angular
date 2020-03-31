import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule, MatIconModule } from "@angular/material";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcSpinnerComponent]
})
export class DxcSpinnerModule {}
