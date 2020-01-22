import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcDialogComponent } from "./dxc-dialog.component";
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcDialogComponent],
  imports: [
    CommonModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })
  ],
  exports: [DxcDialogComponent]
})
export class DXCDialogModule {}
