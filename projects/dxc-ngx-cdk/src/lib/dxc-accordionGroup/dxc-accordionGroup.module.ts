import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { DxcAccordionGroupComponent } from "./dxc-accordionGroup.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { DxcAccordionModule } from '../dxc-accordion/dxc-accordion.module';

@NgModule({
  declarations: [DxcAccordionGroupComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    DxcAccordionModule
  ],
  exports: [DxcAccordionGroupComponent],
})
export class DxcAccordionGroupModule {}
