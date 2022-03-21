import {
  Directive,
  Inject,
  IterableDiffers,
  Optional,
  TemplateRef,
} from "@angular/core";
import { BaseRowDef } from "../row";
import { DXC_RESULTSET_TABLE } from "../tokens";

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
