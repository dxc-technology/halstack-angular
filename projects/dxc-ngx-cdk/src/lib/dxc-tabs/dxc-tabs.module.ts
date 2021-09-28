import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule, MatTab, MatTabGroup } from "@angular/material/tabs";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTabsComponent } from "./dxc-tabs.component";
import { DxcTabComponent } from "./dxc-tab/dxc-tab.component";
import { DxcTabIconComponent } from "./dxc-tab/dxc-tab-icon/dxc-tab-icon.component";
import { DxcBadgeComponent } from "../dxc-badge/dxc-badge.component";

@NgModule({
  declarations: [
    DxcTabsComponent,
    DxcTabComponent,
    DxcTabIconComponent,
    DxcBadgeComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    DxcTabsComponent,
    DxcTabComponent,
    DxcTabIconComponent,
    DxcBadgeComponent,
  ],
  entryComponents: [MatTab, MatTabGroup],
})
export class DxcTabsModule {}
