import { Directive, ElementRef, ViewContainerRef } from "@angular/core";
import { RowOutlet } from "../interfaces/row-outlet.interface";

/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
@Directive({ selector: "[rowOutlet]" })
export class DataRowOutlet implements RowOutlet {
  constructor(
    public viewContainer: ViewContainerRef,
    public elementRef: ElementRef
  ) {}
}
