/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectTrigger, V3DxcSelectComponent } from './select';
import { DxcOptionModule } from './option/option.module';
import { MatCommonModule } from './common-behaviors/common-module';
import { MatInputModule } from '@angular/material/input';
import { BackgroundProviderModule } from '../background-provider/background-provider.module';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    DxcOptionModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    BackgroundProviderModule
  ],
  exports: [
    CdkScrollableModule,
    MatFormFieldModule,
    V3DxcSelectComponent,
    MatSelectTrigger,
    DxcOptionModule
  ],
  declarations: [V3DxcSelectComponent, MatSelectTrigger],
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
})
export class V3DxcSelectModule { }
