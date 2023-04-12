import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { DxcToggleGroupComponent } from "./dxc-toggleGroup.component";
import { DxcToggleComponent } from "./dxc-toggle/dxc-toggle.component";
import { DxcToggleIconComponent } from './dxc-toggle-icon/dxc-toggle-icon.component';

@NgModule({
    declarations: [DxcToggleGroupComponent, DxcToggleComponent, DxcToggleIconComponent],
    imports: [CommonModule, MatIconModule],
    exports: [DxcToggleGroupComponent, DxcToggleComponent, DxcToggleIconComponent]
})
export class DxcToggleGroupModule {}
