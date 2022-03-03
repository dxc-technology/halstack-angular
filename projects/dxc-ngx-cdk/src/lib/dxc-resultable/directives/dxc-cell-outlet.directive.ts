import { Directive, OnDestroy, ViewContainerRef } from "@angular/core";
import { DxcCellDef } from "./dxc-cell-def.directive";

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
