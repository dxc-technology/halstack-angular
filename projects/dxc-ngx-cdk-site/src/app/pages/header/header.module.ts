import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DXCHeaderModule, DxcTableModule, DxcButtonModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { HeaderComponent } from './header.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { HeaderExampleComponent } from '../../components/examples/header/header-example/header-example.component';
import { HeaderTablePropertiesComponent } from '../../components/examples/header/properties/header-table-properties/header-table-properties.component';
import { HeaderDefaultComponent } from '../../components/examples/header/header-default/header-default.component';
import { HeaderDarkComponent } from '../../components/examples/header/header-dark/header-dark.component';
import { HeaderUnderlinedComponent } from '../../components/examples/header/header-underlined/header-underlined.component';
import { HeaderCustomContentComponent } from '../../components/examples/header/header-custom-content/header-custom-content.component';

import { HeaderDirectivesComponent } from '../../components/examples/header/header-directives/header-directives.component';
import { HeaderExampleResponsiveComponent } from '../../components/examples/header/responsive/header-example-responsive/header-example-responsive.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { HeaderImportComponent } from '../../components/examples/header/header-import/header-import.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDefaultComponent,
    HeaderDarkComponent,
    HeaderUnderlinedComponent,
    HeaderCustomContentComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      DXCHeaderModule,
      DxcButtonModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcTagModule,
      CodePlaygroundModule
  ],
  exports: [
    HeaderComponent,
    HeaderExampleComponent,
    HeaderTablePropertiesComponent,
    HeaderDefaultComponent,
    HeaderDarkComponent,
    HeaderUnderlinedComponent,
    HeaderCustomContentComponent,
    HeaderDirectivesComponent,
    HeaderExampleResponsiveComponent,
    HeaderImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class HeaderModule { }
