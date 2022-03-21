import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { DxcFooterComponent } from "./dxc-footer.component";
import { PipesModule } from "../pipes/pipes.module";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcFooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    PipesModule,
    BackgroundProviderInnerModule,
  ],
  exports: [DxcFooterComponent],
})
export class DxcFooterModule {}
