import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcToggleComponent } from "./dxc-toggle.component";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcToggleComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcToggleComponent]
})
export class DXCToggleModule {}
