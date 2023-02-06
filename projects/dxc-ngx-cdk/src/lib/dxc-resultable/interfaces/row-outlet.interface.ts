import { ViewContainerRef } from "@angular/core";

/** Interface used to provide an outlet for rows to be inserted into. */
export interface RowOutlet {
  viewContainer: ViewContainerRef;
}
