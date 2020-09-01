import { NgModule } from "@angular/core";
import { DxcButtonModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { ButtonComponent } from './button.component';
import { ButtonModesComponent } from '../../components/examples/button/button-modes/button-modes.component';
import { ButtonWithIconComponent } from '../../components/examples/button/button-with-icon/button-with-icon.component';
import { ButtonExampleComponent } from '../../components/examples/button/button-example/button-example.component';
import { ButtonDefaultComponent } from '../../components/examples/button/button-default/button-default.component';
import { ButtonFilledParentComponent } from '../../components/examples/button/button-filled-parent/button-filled-parent.component';
import { ButtonSizedComponent } from '../../components/examples/button/button-sized/button-sized.component';
import { ButtonTablePropertiesComponent } from '../../components/examples/button/properties/button-table-properties/button-table-properties.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ButtonImportComponent } from '../../components/examples/button/button-import/button-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ButtonTextModeComponent } from '../../components/examples/button/button-text-mode/button-text-mode.component';
import { ButtonThemeComponent } from '../../components/examples/button/button-theme/button-theme.component';
import { ButtonApiComponent } from '../../components/examples/button/button-api/button-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonModesComponent,
    ButtonWithIconComponent,
    ButtonExampleComponent,
    ButtonDefaultComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonTextModeComponent,
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
    ColorPreviewModule
  ],
  exports: [
    ButtonModesComponent,
    ButtonWithIconComponent,
    ButtonExampleComponent,
    ButtonDefaultComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonTextModeComponent,
    ButtonThemeComponent,
    ButtonApiComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class ButtonModule {}
