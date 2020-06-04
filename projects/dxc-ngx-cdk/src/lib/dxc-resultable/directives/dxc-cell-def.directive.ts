import { Directive, TemplateRef } from '@angular/core';

export interface CellDef {
  template: TemplateRef<any>;
}

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({selector: '[dxcCellDef]'})
export class DxcCellDef implements CellDef {
  constructor(public template: TemplateRef<any>) {}
}
