import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { DxcTagComponent } from "./dxc-tag.component";
import { DxcBoxComponent } from "../dxc-box/dxc-box.component";
import { DxcBoxModule } from "../dxc-box/dxc-box.module";
import { DxcTagIconComponent } from './dxc-tag-icon/dxc-tag-icon.component';

@NgModule({
    declarations: [DxcTagComponent, DxcTagIconComponent],
    imports: [CommonModule, MatIconModule, DxcBoxModule],
    exports: [DxcTagComponent, DxcTagIconComponent]
})
export class DxcTagModule {}
