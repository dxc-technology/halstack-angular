import { NgModule } from "@angular/core";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from "./dxc-alert.component";

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [DxcAlertComponent],
})
export class DxcAlertModule {}
