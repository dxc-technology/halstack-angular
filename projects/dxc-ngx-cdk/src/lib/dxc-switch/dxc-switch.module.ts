import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { DxcSwitchComponent } from "./dxc-switch.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcSwitchComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcSwitchComponent]
})
export class DxcSwitchModule {}
