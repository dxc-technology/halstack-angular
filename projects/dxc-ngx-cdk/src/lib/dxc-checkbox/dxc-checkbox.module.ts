import { NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcCheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcCheckboxComponent]
})
export class DxcCheckboxModule {}
