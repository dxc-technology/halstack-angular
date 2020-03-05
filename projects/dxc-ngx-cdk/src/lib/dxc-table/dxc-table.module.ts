import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { DxcTableComponent } from "./dxc-table.component";
import { CommonModule } from "@angular/common";
import { ThemeModule, defaultTheme } from "../theme";

@NgModule({
  declarations: [DxcTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcTableComponent]
})
export class DxcTableModule {}
