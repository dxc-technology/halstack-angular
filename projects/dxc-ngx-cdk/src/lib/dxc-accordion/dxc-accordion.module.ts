import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

import { DxcAccordionComponent } from "./dxc-accordion.component";
import { CommonModule } from "@angular/common";
import { DxcAccordionIconComponent } from "./dxc-accordion-icon/dxc-accordion-icon.component";
import { BackgroundProviderInnerModule } from "../background-provider/background-provider-inner.module";

@NgModule({
  declarations: [DxcAccordionComponent, DxcAccordionIconComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    BackgroundProviderInnerModule,
  ],
  exports: [DxcAccordionComponent, DxcAccordionIconComponent],
})
export class DxcAccordionModule {}
