import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNewInputTextComponent } from "./dxc-new-input-text.component";
import { DxcNewInputTextActionComponent } from "./dxc-new-input-text-action/dxc-new-input-text-action.component";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { BoldOptionsPipe } from "./pipes/bold-options.pipe";

@NgModule({
  declarations: [
    DxcNewInputTextComponent,
    DxcNewInputTextActionComponent,
    FilterOptionsPipe,
    BoldOptionsPipe
  ],
  imports: [CommonModule],
  exports: [DxcNewInputTextComponent, DxcNewInputTextActionComponent],
})
export class DxcNewInputTextModule {}
