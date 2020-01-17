import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { DxcButtonComponent } from "./dxc-button.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcButtonComponent]
})
export class DxcButtonModule {}
