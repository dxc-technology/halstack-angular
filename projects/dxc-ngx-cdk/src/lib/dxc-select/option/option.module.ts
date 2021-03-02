/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '../ripple/index';
import { MatPseudoCheckboxModule } from '../selection/index';
import { MatCommonModule } from '../common-behaviors/common-module';
import { DxcSelectOption } from './option';
import { DxcCheckboxModule } from '../../dxc-checkbox/dxc-checkbox.module';
import { DxcOptionIconComponent } from './dxc-option-icon/dxc-option-icon.component';


@NgModule({
  imports: [MatRippleModule, CommonModule, MatCommonModule, MatPseudoCheckboxModule, DxcCheckboxModule],
  exports: [DxcSelectOption, DxcOptionIconComponent],
  declarations: [DxcSelectOption, DxcOptionIconComponent]
})
export class DxcOptionModule { }

