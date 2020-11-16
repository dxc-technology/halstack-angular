import { NgModule } from "@angular/core";
import { DxcStandardLayoutComponent } from "./dxc-standard-layout.component";
import { CommonModule } from "@angular/common";
import { BtnArrowService } from './dxc-standard-layout-sidenav/services/btnArrow.service';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  declarations: [DxcStandardLayoutComponent],
  imports: [
    CommonModule,
    ObserversModule
  ],
  exports: [DxcStandardLayoutComponent],
  providers:[BtnArrowService]
})
export class DxcStandardLayoutModule {}
