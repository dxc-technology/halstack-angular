import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcHeaderRowComponent } from "./components/dxc-header-row/dxc-header-row.component";
import { DxcRowComponent } from "./components/dxc-row/dxc-row.component";
import { DxcCellDef } from "./directives/dxc-cell-def.directive";
import { DxcColumnDef } from "./directives/dxc-column-def.directive";
import { FormsModule } from "@angular/forms";
import { DxcTableModule } from "../dxc-table/dxc-table.module";
import { DxcPaginatorModule } from "../dxc-paginator/dxc-paginator.module";
import { Ordering } from "./directives/sorting.directive";
import { HeaderOutlet } from "./directives/header-outlet.directive";
import { DataRowOutlet } from "./directives/data-row-outlet.directive";
import { DxcResultTable } from "./table";
import { DxcRowDef } from "./directives/dxc-row-def.directive";
import { DxcCellOutlet } from "./directives/dxc-cell-outlet.directive";

const DECLARATIONS = [
  DxcResultTable,
  DxcRowDef,
  DxcCellDef,
  DxcCellOutlet,
  DxcColumnDef,
  DxcHeaderRowComponent,
  HeaderOutlet,
  DataRowOutlet,
  DxcRowComponent,
  Ordering,
];

const EXPORTED_DECLARATIONS = [DxcResultTable, DxcCellDef, DxcColumnDef];

@NgModule({
    exports: [EXPORTED_DECLARATIONS],
    imports: [FormsModule, CommonModule, DxcTableModule, DxcPaginatorModule],
    declarations: DECLARATIONS
})
export class DxcResultsetTableModule {}
