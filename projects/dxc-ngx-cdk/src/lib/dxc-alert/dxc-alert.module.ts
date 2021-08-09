import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from "./dxc-alert.component";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule, BackgroundProviderModule],
  exports: [DxcAlertComponent],
})
export class DxcAlertModule {}
