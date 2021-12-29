import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcTextInputComponent } from "./dxc-text-input.component";
import { DxcTextInputActionComponent } from "./dxc-text-input-action/dxc-text-input-action.component";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { BoldOptionsPipe } from "./pipes/bold-options.pipe";
import { DxcTextInputPrefixComponent } from "./dxc-text-input-prefix/dxc-text-input-prefix.component";
import { DxcTextInputSuffixComponent } from "./dxc-text-input-suffix/dxc-text-input-suffix.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DxcTextInputComponent,
    DxcTextInputActionComponent,
    FilterOptionsPipe,
    BoldOptionsPipe,
    DxcTextInputPrefixComponent,
    DxcTextInputSuffixComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DxcTextInputComponent,
    DxcTextInputActionComponent,
    DxcTextInputPrefixComponent,
    DxcTextInputSuffixComponent,
  ],
})
export class DxcTextInputModule {}
