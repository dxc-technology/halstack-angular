import { NgModule } from "@angular/core";
import { DxcButtonModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { ButtonComponent } from './button.component';
import { ButtonModesComponent } from '../../components/examples/button/button-modes/button-modes.component';
import { ButtonWithIconComponent } from '../../components/examples/button/button-with-icon/button-with-icon.component';
import { ButtonExampleComponent } from '../../components/examples/button/button-example/button-example.component';
import { ButtonDarkThemeComponent } from '../../components/examples/button/button-dark-theme/button-dark-theme.component';
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

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonModesComponent,
    ButtonWithIconComponent,
    ButtonExampleComponent,
    ButtonDarkThemeComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonTextModeComponent
    ],
  imports: [
    BrowserModule,
    DxcButtonModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports: [
    ButtonModesComponent,
    ButtonWithIconComponent,
    ButtonExampleComponent,
    ButtonDarkThemeComponent,
    ButtonFilledParentComponent,
    ButtonSizedComponent,
    ButtonTablePropertiesComponent,
    ButtonImportComponent,
    ButtonTextModeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class ButtonModule {}
