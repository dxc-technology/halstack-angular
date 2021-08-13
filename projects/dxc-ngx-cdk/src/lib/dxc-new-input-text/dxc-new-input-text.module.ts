import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNewInputTextComponent } from "./dxc-new-input-text.component";
import { DxcNewInputTextActionComponent } from "./dxc-new-input-text-action/dxc-new-input-text-action.component";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { BoldOptionsPipe } from "./pipes/bold-options.pipe";
import { DxcInputTextPrefixComponent } from "./dxc-input-text-prefix/dxc-input-text-prefix.component";
import { DxcInputTextSuffixComponent } from "./dxc-input-text-suffix/dxc-input-text-suffix.component";

@NgModule({
  declarations: [
    DxcNewInputTextComponent,
    DxcNewInputTextActionComponent,
    FilterOptionsPipe,
    BoldOptionsPipe,
    DxcInputTextPrefixComponent,
    DxcInputTextSuffixComponent,
  ],
  imports: [CommonModule],
  exports: [
    DxcNewInputTextComponent,
    DxcNewInputTextActionComponent,
    DxcInputTextPrefixComponent,
    DxcInputTextSuffixComponent,
  ],
})
export class DxcNewInputTextModule {}
