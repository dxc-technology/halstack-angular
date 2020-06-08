import { NgModule } from '@angular/core';
import { DataRowOutlet, DxcResultTable, HeaderOutlet } from './table';
import { DxcCellOutlet, DxcRowDef } from './row';
import { CommonModule } from '@angular/common';
import { DxcHeaderRowComponent } from './components/dxc-header-row/dxc-header-row.component';
import { DxcRowComponent } from './components/dxc-row/dxc-row.component';
import { DxcCellDef } from './directives/dxc-cell-def.directive';
import { DxcColumnDef } from './directives/dxc-column-def.directive';
import { FormsModule } from '@angular/forms';
import { DxcTableModule } from '../dxc-table/dxc-table.module';
import { DxcPaginatorModule } from '../dxc-paginator/dxc-paginator.module';


const EXPORTED_DECLARATIONS = [
  DxcResultTable,
  DxcRowDef,
  DxcCellDef,
  DxcCellOutlet,
  DxcColumnDef,
  DxcHeaderRowComponent,
  HeaderOutlet,
  DataRowOutlet,
  DxcRowComponent
];

@NgModule({
  exports: [
    EXPORTED_DECLARATIONS
  ],
  imports: [
    FormsModule,
    CommonModule,
    DxcTableModule,
    DxcPaginatorModule
  ],
  declarations: EXPORTED_DECLARATIONS,
  entryComponents: [
    DxcRowComponent,
    DxcHeaderRowComponent
  ]
  })

export class CdkTableModule { }
