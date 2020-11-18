import { NgModule } from "@angular/core";
import { DxcStandardLayoutComponent } from "./dxc-standard-layout.component";
import { CommonModule } from "@angular/common";
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  declarations: [DxcStandardLayoutComponent],
  imports: [
    CommonModule,
    ObserversModule
  ],
  exports: [DxcStandardLayoutComponent],
  providers:[]
})
export class DxcStandardLayoutModule {}
