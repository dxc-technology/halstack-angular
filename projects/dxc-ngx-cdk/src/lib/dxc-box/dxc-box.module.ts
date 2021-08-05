import { NgModule } from "@angular/core";
import { DxcBoxComponent } from "./dxc-box.component";
import { CommonModule } from "@angular/common";
import { BackgroundProviderModule } from '../background-provider/background-provider.module';

@NgModule({
  declarations: [DxcBoxComponent],
  imports: [CommonModule, BackgroundProviderModule],
  exports: [DxcBoxComponent],
})
export class DxcBoxModule {}
