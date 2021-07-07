import { DxcDialogModule } from './../dxc-dialog/dxc-dialog.module';
import { DxcLabelModule } from './../dxc-label/dxc-label.module';
import { DxcInputTextModule } from './../dxc-text-input/dxc-input-text.module';
import { DxcSelectModule } from './../dxc-select/select-module';
import { DxcCheckboxModule } from './../dxc-checkbox/dxc-checkbox.module';
import { DxcTreeModule } from '../dxc-tree/dxc-tree.module';
import { DxcButtonModule } from './../dxc-button/dxc-button.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxcGridModule } from '../dxc-grid/dxc-grid.module';
import { CellrenderComponent } from '../dxc-grid/cellrender/cellrender.component';
import { SimplecellclickComponent } from '../dxc-grid/simplecellclickrenderer/simplecellclick.component';
import { LookupService } from './../services/lookup/lookup.service';
import { DxcBaselookupComponent } from './baselookup/dxc-baselookup.component';
import { DxcCodeLookupComponent } from './codelookup/dxc-codelookup.component';
import { DxcCrudLookupComponent } from './crudlookup/dxc-crudlookup.component';
import { DxcUserLookupComponent } from './userlookup/dxc-userlookup.component';
import { DxcOrghlookupComponent } from './orghlookup/dxc-orghlookup.component';
import { DxcOrghlookupSearchComponent } from './orghlookup/orghlookup-search/dxc-orghlookup-search.component';

@NgModule({
  declarations: [DxcBaselookupComponent, DxcCodeLookupComponent, DxcCrudLookupComponent, DxcUserLookupComponent, DxcOrghlookupComponent, DxcOrghlookupSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    DxcGridModule,
    MatTabsModule,
    DxcDialogModule,
    DxcButtonModule,
    DxcTreeModule,
    DxcDialogModule,
    DxcCheckboxModule,
    DxcSelectModule,
    DxcInputTextModule,
    DxcLabelModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  exports: [DxcCodeLookupComponent, DxcCrudLookupComponent, DxcUserLookupComponent, DxcOrghlookupComponent],
  providers: [LookupService],
  entryComponents: [
    CellrenderComponent,
    SimplecellclickComponent
  ]
})
export class DxcLookupModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DxcLookupModule
    };
  }
}
