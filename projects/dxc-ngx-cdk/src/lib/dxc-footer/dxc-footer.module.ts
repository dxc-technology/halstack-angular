import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { DxcFooterComponent } from "./dxc-footer.component";
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [DxcFooterComponent],
  imports: [CommonModule, MatToolbarModule, PipesModule],
  exports: [DxcFooterComponent],
})
export class DxcFooterModule {}
