import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { DxcAlertComponent } from "./dxc-alert.component";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcAlertComponent],
  imports: [CommonModule, MatSnackBarModule, BackgroundProviderInnerModule],
  exports: [DxcAlertComponent],
})
export class DxcAlertModule {}
