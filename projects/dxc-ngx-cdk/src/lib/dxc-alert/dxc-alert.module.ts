import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from './dxc-alert.component';
import { ThemeModule, defaultTheme } from '../theme';

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule,
    ThemeModule.forRoot({
      themes: [defaultTheme],
      active: "default"
    })],
  exports: [DxcAlertComponent]
})
export class DXCAlertModule {}
