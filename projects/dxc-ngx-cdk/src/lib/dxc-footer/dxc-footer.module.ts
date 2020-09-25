import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { DxcFooterComponent } from './dxc-footer.component';

@NgModule({
  declarations: [DxcFooterComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [DxcFooterComponent]
})
export class DxcFooterModule {}
