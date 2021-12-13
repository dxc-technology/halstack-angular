import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcNewSelectComponent } from "./dxc-new-select.component";
import { DxcCheckboxModule } from "../dxc-checkbox/dxc-checkbox.module";
import { DxcNewSelectOptionComponent } from "./dxc-new-select-option/dxc-new-select-option.component";
import { PipesModule } from "../pipes/pipes.module";
import { DxcSelectOptionSelectedComponent } from "./dxc-select-option-selected/dxc-select-option-selected.component";
import { FilterOptionsPipe } from "./pipes/filter-options.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DxcNewSelectComponent,
    DxcNewSelectOptionComponent,
    DxcSelectOptionSelectedComponent,
    FilterOptionsPipe,
  ],
  imports: [CommonModule, DxcCheckboxModule, PipesModule, FormsModule],
  exports: [DxcNewSelectComponent],
})
export class DxcNewSelectModule {}
