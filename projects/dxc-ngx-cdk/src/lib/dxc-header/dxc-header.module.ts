import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcHeaderComponent } from "./dxc-header.component";
import { ClosableDirective } from './directives/closable.directive';

@NgModule({
  declarations: [DxcHeaderComponent, ClosableDirective],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [DxcHeaderComponent,ClosableDirective]
})
export class DxcHeaderModule {}
