/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Directive,
  IterableDiffer,
  IterableDiffers,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  Inject,
  Optional,
} from "@angular/core";
import { DXC_RESULTSET_TABLE } from "./tokens";
import { DxcCellDef } from "./directives/dxc-cell-def.directive";

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
export const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;

/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
@Directive()
export abstract class BaseRowDef implements OnChanges {
  /** The columns to be displayed on this row. */
  columns: Iterable<string>;

  /** Differ used to check if any changes were made to the columns. */
  protected _columnsDiffer: IterableDiffer<any>;

  constructor(
    /** @docs-private */ public template: TemplateRef<any>,
    protected _differs: IterableDiffers
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Create a new columns differ if one does not yet exist. Initialize it based on initial value
    // of the columns property or an empty array if none is provided.
    if (!this._columnsDiffer) {
      const columns =
        (changes["columns"] && changes["columns"].currentValue) || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
}

/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
@Directive({
  selector: "[dxcRowDef]",
  inputs: ["columns: dxcRowDefColumns", "when: dxcRowDefWhen"],
})
export class DxcRowDef<T> extends BaseRowDef {
  /**
   * Function that should return true if this row template should be used for the provided index
   * and row data. If left undefined, this row will be considered the default row template to use
   * when no other when functions return true for the data.
   * For every row, there must be at least one when function that passes or an undefined to default.
   */
  when: (index: number, rowData: T) => boolean;

  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(
    template: TemplateRef<any>,
    _differs: IterableDiffers,
    @Inject(DXC_RESULTSET_TABLE) @Optional() public _table?: any
  ) {
    super(template, _differs);
  }
}

/** Context provided to the row cells when `multiTemplateDataRows` is false */
export interface DxcCellOutletRowContext<T> {
  /** Data for the row that this cell is located within. */
  $implicit?: T;

  /** Index of the data object in the provided data array. */
  index?: number;

  /** Length of the number of total rows. */
  count?: number;

  /** True if this cell is contained in the first row. */
  first?: boolean;

  /** True if this cell is contained in the last row. */
  last?: boolean;

  /** True if this cell is contained in a row with an even-numbered index. */
  even?: boolean;

  /** True if this cell is contained in a row with an odd-numbered index. */
  odd?: boolean;
}

/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
@Directive({ selector: "[cdkCellOutlet]" })
export class DxcCellOutlet implements OnDestroy {
  /** The ordered list of cells to render within this outlet's view container */
  cells: DxcCellDef[];

  /** The data context to be provided to each cell */
  context: any;

  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */
  static mostRecentCellOutlet: DxcCellOutlet | null = null;

  constructor(public _viewContainer: ViewContainerRef) {
    DxcCellOutlet.mostRecentCellOutlet = this;
  }

  ngOnDestroy() {
    // If this was the last outlet being rendered in the view, remove the reference
    // from the static property after it has been destroyed to avoid leaking memory.
    if (DxcCellOutlet.mostRecentCellOutlet === this) {
      DxcCellOutlet.mostRecentCellOutlet = null;
    }
  }
}
