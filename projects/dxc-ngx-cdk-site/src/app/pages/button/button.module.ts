import { NgModule } from "@angular/core";
import { DxcButtonModule, DxcTableModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { ButtonComponent } from './button.component';
import { ButtonExampleComponent } from '../../components/examples/button/button-example/button-example.component';
import { ButtonTablePropertiesComponent } from '../../components/examples/button/properties/button-table-properties/button-table-properties.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ButtonImportComponent } from '../../components/examples/button/button-import/button-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ButtonThemeComponent } from '../../components/examples/button/button-theme/button-theme.component';
import { ButtonApiComponent } from '../../components/examples/button/button-api/button-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonExampleComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonThemeComponent,
    ButtonApiComponent
  ],
  imports: [
    BrowserModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    ButtonExampleComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonThemeComponent,
    ButtonApiComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class ButtonModule { }
