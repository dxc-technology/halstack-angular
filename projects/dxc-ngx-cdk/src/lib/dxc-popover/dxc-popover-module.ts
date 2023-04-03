import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

import { DxcPopover } from './dxc-popover';
import { DxcPopoverTrigger } from './dxc-popover-trigger';
import { DxcPopoverTarget } from './dxc-popover-target';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    A11yModule
  ],
  exports: [DxcPopover, DxcPopoverTrigger, DxcPopoverTarget],
  declarations: [DxcPopover, DxcPopoverTrigger, DxcPopoverTarget],
})
export class DxcPopoverModule {}
