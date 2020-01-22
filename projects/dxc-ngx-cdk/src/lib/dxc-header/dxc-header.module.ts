import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcHeaderComponent } from "./dxc-header.component";
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcHeaderComponent]
})
export class DXCHeaderModule {}
