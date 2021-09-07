import { DxcLabelModule } from './../dxc-label/dxc-label.module';
import { DxcInputTextModule } from './../dxc-text-input/dxc-input-text.module';
import { DxcSelectModule } from './../dxc-select/select-module';
import { DxcLookupModule } from './../dxc-lookup/dxc-lookup.module';
import { DxcDateModule } from './../dxc-date/dxc-date.module';
import { DxcTextareaModule } from './../dxc-textarea/dxc-textarea.module';
import { DxcCheckboxModule } from './../dxc-checkbox/dxc-checkbox.module';
import { DxcPageErrorsModule } from './../dxc-page-errors/dxc-page-errors.module';
import { DxcToolbarModule } from '../dxc-toolbar/dxc-toolbar.module';
import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCrudTableComponent } from './dxc-crud-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudGridHelper } from './../helpers/crud-grid/crud-grid-helper';
import { DxcDialogModule } from './../dxc-dialog/dxc-dialog.module';
import { DxcSubHeadingModule} from  './../dxc-sub-heading/dxc-sub-heading.module'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatterPipe } from './data-formatter/formatter.pipe';
import { DxcCrudEdiatbleFieldsComponent } from './dxc-crud-ediatble-fields/dxc-crud-ediatble-fields.component';
import { DxcCrudCellRenderComponent } from './dxc-crud-cell-render/dxc-crud-cell-render.component';
import { DxcTextEditorModule } from './../dxc-text-editor/dxc-text-editor.module';
import { DxcNumberModule } from './../dxc-number/dxc-number.module';

@NgModule({
  declarations: [DxcCrudTableComponent, FormatterPipe, DxcCrudEdiatbleFieldsComponent, DxcCrudCellRenderComponent],
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatDialogModule,
    MatButtonModule, MatIconModule,
    MatGridListModule, MatSortModule, MatCardModule, MatTooltipModule, 
    FormsModule,
    ReactiveFormsModule,
    DxcButtonModule,
    DxcInputTextModule,
    DxcSelectModule,
    DxcDateModule,
    DxcTextareaModule,
    DxcLabelModule,
    DxcLookupModule,
    DxcCheckboxModule,
    DxcDialogModule,
    DxcDialogModule,
    DxcSubHeadingModule,
    DxcPageErrorsModule,
    DxcToolbarModule,
    DxcTextEditorModule,
    DxcNumberModule
  ],
  exports: [DxcCrudTableComponent]
})
export class DxcCrudTableModule {
  static forRoot() {
    return {
      ngModule: DxcCrudTableModule,
      providers: [CrudGridHelper]
    };
  }
}
