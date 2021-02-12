import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { DxcAccordionGroupComponent } from "./dxc-accordionGroup.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { DxcAccordionComponent } from '../dxc-accordion/dxc-accordion.component';

@NgModule({
  declarations: [DxcAccordionGroupComponent, DxcAccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [DxcAccordionGroupComponent, DxcAccordionComponent],
})
export class DxcAccordionGroupModule {}
