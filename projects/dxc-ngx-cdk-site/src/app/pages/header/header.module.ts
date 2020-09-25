import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeaderModule, DxcTableModule, DxcButtonModule,DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { HeaderComponent } from './header.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';
import { HeaderTablePropertiesComponent } from '../../components/examples/header/properties/header-table-properties/header-table-properties.component';
import { HeaderDefaultComponent } from '../../components/examples/header/header-default/header-default.component';
import { HeaderCustomContentComponent } from '../../components/examples/header/header-custom-content/header-custom-content.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

import { HeaderDirectivesComponent } from '../../components/examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../../components/examples/header/responsive/header-example-responsive/header-example-responsive.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { HeaderImportComponent } from '../../components/examples/header/header-import/header-import.component';
import { HeaderThemeComponent } from '../../components/examples/header/header-theme/header-theme.component';
import { HeaderApiComponent } from '../../components/examples/header/header-api/header-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDefaultComponent,
    HeaderCustomContentComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent,
    HeaderApiComponent,
    HeaderThemeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      DxcHeaderModule,
      DxcButtonModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcTagModule,
      ComponentsSidenavModule,
      CodePlaygroundModule,
      ColorPreviewModule,
      DxcChipModule
  ],
  exports: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDefaultComponent,
    HeaderCustomContentComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent,
    HeaderApiComponent,
    HeaderThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class HeaderModule { }
