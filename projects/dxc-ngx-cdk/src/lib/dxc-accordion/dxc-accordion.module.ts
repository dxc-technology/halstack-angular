import { NgModule } from "@angular/core";
import { MatExpansionModule, MatIconModule } from "@angular/material";
import { DxcAccordionComponent } from "./dxc-accordion.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcAccordionComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  exports: [DxcAccordionComponent],
})
export class DxcAccordionModule {}
