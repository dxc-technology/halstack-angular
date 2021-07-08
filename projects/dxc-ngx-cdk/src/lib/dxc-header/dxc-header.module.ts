import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { DxcHeaderComponent } from "./dxc-header.component";
import { ClosableDirective } from "./directives/closable.directive";
import { DxcDropdownModule } from '../dxc-dropdown/dxc-dropdown.module';
import { DxcHeaderDropdownComponent } from './dxc-header-dropdown/dxc-header-dropdown.component';
import { SafeUrlPipe } from '../theme/safe-url.directive';

@NgModule({
  declarations: [DxcHeaderComponent, DxcHeaderDropdownComponent, ClosableDirective, SafeUrlPipe],
  imports: [CommonModule, MatToolbarModule, DxcDropdownModule],
  exports: [DxcHeaderComponent, DxcHeaderDropdownComponent, ClosableDirective],
})
export class DxcHeaderModule {}
