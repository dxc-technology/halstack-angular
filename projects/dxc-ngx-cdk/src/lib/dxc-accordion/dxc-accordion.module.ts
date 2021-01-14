import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { DxcAccordionComponent } from "./dxc-accordion.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { DxcAccordionIconComponent } from './dxc-accordion-icon/dxc-accordion-icon.component';

@NgModule({
  declarations: [DxcAccordionComponent, DxcAccordionIconComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  exports: [DxcAccordionComponent],
})
export class DxcAccordionModule {}
