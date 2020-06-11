/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {InjectionToken} from '@angular/core';

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
export const DXC_RESULTSET_TABLE = new InjectionToken<any>('DXC_RESULTSET_TABLE');

