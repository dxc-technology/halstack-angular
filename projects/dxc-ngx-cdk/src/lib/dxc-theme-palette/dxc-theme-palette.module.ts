import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcThemePaletteComponent } from './dxc-theme-palette.component';
import { DxcSwitchModule } from '../dxc-switch/dxc-switch.module';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon'
import { DxcSafeModule } from '../directives/pipes/safe/dxc-safe.module'
@NgModule({
  declarations: [DxcThemePaletteComponent],
  imports: [
    CommonModule,
    DxcSwitchModule,
    MatTooltipModule,
    MatIconModule,
    DxcSafeModule
  ], 
  exports: [DxcThemePaletteComponent]
})
export class DxcThemePaletteModule { }
