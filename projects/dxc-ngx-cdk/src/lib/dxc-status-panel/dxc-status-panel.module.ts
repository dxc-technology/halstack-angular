import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DxcStatusPanelComponent } from './dxc-status-panel.component';

@NgModule({
  declarations: [DxcStatusPanelComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule
  ],
  exports: [DxcStatusPanelComponent]
})
export class DxcStatusPanelModule { }
