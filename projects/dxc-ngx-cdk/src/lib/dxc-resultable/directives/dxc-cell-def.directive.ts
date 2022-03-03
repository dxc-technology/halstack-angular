import { Directive, TemplateRef } from "@angular/core";
import CellDef from "../interfaces/cell-def.interface";

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({ selector: "[dxcCellDef]" })
export class DxcCellDef implements CellDef {
  constructor(public template: TemplateRef<any>) {}
}
