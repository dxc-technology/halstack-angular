import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from "./dxc-alert.component";

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [DxcAlertComponent],
})
export class DxcAlertModule {}
