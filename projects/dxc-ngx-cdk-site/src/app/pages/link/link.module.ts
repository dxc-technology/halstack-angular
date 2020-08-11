import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcLinkModule, DxcTableModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { LinkExampleComponent } from '../../components/examples/link/link-example/link-example.component';
import { LinkDefaultComponent } from '../../components/examples/link/link-default/link-default.component';
import { LinkUndercoratedComponent } from '../../components/examples/link/link-undercorated/link-undercorated.component';
import { LinkThemedComponent } from '../../components/examples/link/link-themed/link-themed.component';
import { LinkIconComponent } from '../../components/examples/link/link-icon/link-icon.component';
import { LinkTablePropertiesComponent } from '../../components/examples/link/properties/link-table-properties/link-table-properties.component';
import { LinkImportComponent } from '../../components/examples/link/link-import/link-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { LinkDisabledComponent } from '../../components/examples/link/link-disabled/link-disabled.component';
import { LinkApiComponent } from '../../components/examples/link/link-api/link-api.component';
import { LinkThemeComponent } from '../../components/examples/link/link-theme/link-theme.component';

@NgModule({
  declarations: [
    LinkComponent,
    LinkExampleComponent,
    LinkDefaultComponent,
    LinkUndercoratedComponent,
    LinkThemedComponent,
    LinkIconComponent,
    LinkTablePropertiesComponent,
    LinkDisabledComponent,
    LinkImportComponent,
    LinkApiComponent,
    LinkThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcLinkModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports:[
    LinkComponent,
    LinkExampleComponent,
    LinkDefaultComponent,
    LinkUndercoratedComponent,
    LinkThemedComponent,
    LinkIconComponent,
    LinkTablePropertiesComponent,
    LinkDisabledComponent,
    LinkImportComponent,
    LinkApiComponent,
    LinkThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class LinkModule { }
