import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcSelectComponent } from "./dxc-select.component";
import { DxcCheckboxModule } from "../dxc-checkbox/dxc-checkbox.module";
import { DxcSelectOptionComponent } from "./dxc-select-option/dxc-select-option.component";
import { PipesModule } from "../pipes/pipes.module";
import { DxcSelectOptionSelectedComponent } from "./dxc-select-option-selected/dxc-select-option-selected.component";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DxcSelectComponent,
    DxcSelectOptionComponent,
    DxcSelectOptionSelectedComponent,
    FilterOptionsPipe,
  ],
  imports: [CommonModule, DxcCheckboxModule, PipesModule, FormsModule],
  exports: [DxcSelectComponent],
})
export class DxcSelectModule {}
