import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule, MatTab, MatTabGroup } from "@angular/material/tabs";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DxcTabsComponent } from "./dxc-tabs.component";
import { DxcTabComponent } from "./dxc-tab/dxc-tab.component";
import { DxcSvgModule } from '../dxc-svg/dxc-svg.module';

@NgModule({
  declarations: [DxcTabsComponent, DxcTabComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    DxcSvgModule
  ],
  exports: [DxcTabsComponent, DxcTabComponent],
  entryComponents: [MatTab, MatTabGroup],
})
export class DxcTabsModule {}
