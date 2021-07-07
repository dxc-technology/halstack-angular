import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxcSelectModule } from './../dxc-select/select-module';
import { DxcSearchComponent } from './../dxc-search/dxc-search.component';
import { DxcPaginatorModule } from './../dxc-paginator/dxc-paginator.module';
import { GridHelper } from './../helpers/grid/helper';
import { SimplecellclickComponent } from './simplecellclickrenderer/simplecellclick.component';
import { GridComponent } from './dxc-grid.component';
import { CellrenderComponent } from './cellrender/cellrender.component';
import { GridService } from './../services/grid/grid.service';
import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { DxcCheckboxModule } from './../dxc-checkbox/dxc-checkbox.module';
import { DxcDialogModule } from './../dxc-dialog/dxc-dialog.module';
import { DxcBoxModule } from './../dxc-box/dxc-box.module';
import { DxcInputTextModule } from './../dxc-text-input/dxc-input-text.module';

@NgModule({
  declarations: [GridComponent, CellrenderComponent, DxcSearchComponent, SimplecellclickComponent],
  imports: [
    CommonModule,
    CommonModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    DxcCheckboxModule, 
    DxcInputTextModule,
    DxcButtonModule,
    DxcBoxModule,
    DxcSelectModule,
    DxcDialogModule,
    DxcPaginatorModule,
    DxcButtonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [GridComponent],  
  entryComponents: [
    CellrenderComponent,
    SimplecellclickComponent
  ]
})
export class DxcGridModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DxcGridModule,
      providers: [GridService, GridHelper]
    };
  }
}
