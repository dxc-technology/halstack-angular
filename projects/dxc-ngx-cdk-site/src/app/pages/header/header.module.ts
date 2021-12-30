import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeaderModule, DxcTableModule, DxcButtonModule, DxcTagModule, DxcChipModule, DxcHeadingModule, DxcLinkModule } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { HeaderComponent } from './header.component';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';
import { HeaderTablePropertiesComponent } from '../../components/examples/header/properties/header-table-properties/header-table-properties.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { HeaderDirectivesComponent } from '../../components/examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../../components/examples/header/responsive/header-example-responsive/header-example-responsive.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { HeaderImportComponent } from '../../components/examples/header/header-import/header-import.component';
import { HeaderApiComponent } from '../../components/examples/header/header-api/header-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from 'src/app/components/status-tag/status-tag.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent,
    HeaderApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcHeaderModule,
    DxcButtonModule,
    TabbedSectionModule,
    DxcTableModule,
    DxcTagModule,
    ComponentsSidenavModule,
    CodePlaygroundModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    DxcLinkModule,
    StatusTagModule
  ],
  exports: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent,
    HeaderApiComponent,
  ]
})
export class HeaderModule { }
