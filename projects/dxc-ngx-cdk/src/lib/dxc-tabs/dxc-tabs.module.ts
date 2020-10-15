import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule, MatTab, MatTabGroup } from "@angular/material/tabs";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTabsComponent } from "./dxc-tabs.component";
import { DxcTabComponent } from "./dxc-tab/dxc-tab.component";

@NgModule({
  declarations: [DxcTabsComponent, DxcTabComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [DxcTabsComponent, DxcTabComponent],
  entryComponents: [MatTab, MatTabGroup],
})
export class DxcTabsModule {}
