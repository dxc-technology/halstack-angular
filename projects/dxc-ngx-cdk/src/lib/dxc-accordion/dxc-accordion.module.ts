import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { DxcAccordionComponent } from "./dxc-accordion.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcAccordionComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  exports: [DxcAccordionComponent],
})
export class DxcAccordionModule {}
