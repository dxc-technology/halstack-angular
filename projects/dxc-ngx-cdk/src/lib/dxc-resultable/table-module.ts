import { NgModule } from '@angular/core';
import { DataRowOutlet, DxcResultTable, SpinnerOutlet, HeaderOutlet } from './table';
import { DxcCellOutlet, DxcRowDef } from './row';
import { CommonModule } from '@angular/common';
import { DxcHeaderRowComponent } from './components/dxc-header-row/dxc-header-row.component';
import { DxcRowComponent } from './components/dxc-row/dxc-row.component';
import { DxcCellDef } from './directives/dxc-cell-def.directive';
import { DxcColumnDef } from './directives/dxc-column-def.directive';
import { TableSpinnerComponent } from './components/table-spinner/table-spinner.component';
import { FormsModule } from '@angular/forms';
import { DxcTableModule } from '../dxc-table/dxc-table.module';
import { DxcPaginatorModule } from '../dxc-paginator/dxc-paginator.module';
import { DxcSpinnerModule } from '../dxc-spinner/dxc-spinner.module';


const EXPORTED_DECLARATIONS = [
  DxcResultTable,
  DxcRowDef,
  DxcCellDef,
  DxcCellOutlet,
  DxcColumnDef,
  TableSpinnerComponent,
  DxcHeaderRowComponent,
  HeaderOutlet,
  DataRowOutlet,
  SpinnerOutlet,
  DxcRowComponent
];

@NgModule({
  exports: [
    DxcResultTable,
    DxcCellDef,
    DxcRowDef,
    HeaderOutlet,
    DataRowOutlet,
    SpinnerOutlet,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DxcTableModule,
    DxcSpinnerModule,
    DxcPaginatorModule
  ],
  declarations: EXPORTED_DECLARATIONS,
  entryComponents: [
    DxcRowComponent,
    DxcHeaderRowComponent,
    TableSpinnerComponent
  ],
  providers: [
//     HalResourceServiceFactoryProvider.createInstance(
//       HalResourceService,
//       'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
//       {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
//     ]

// }
  ]})

export class CdkTableModule { }
