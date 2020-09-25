import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from './dxc-alert.component';

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [DxcAlertComponent]
})
export class DxcAlertModule {}
