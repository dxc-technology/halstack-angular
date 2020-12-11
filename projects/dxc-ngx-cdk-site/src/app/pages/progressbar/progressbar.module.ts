import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcProgressbarModule, DxcButtonModule,DxcTagModule,DxcChipModule,DxcHeadingModule } from "@dxc-technology/halstack-angular";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { ProgressbarComponent } from "./progressbar.component";
import { ProgressbarTablePropertiesComponent } from "src/app/components/examples/progressbar/properties/progressbar-table-properties.component";
import { ProgressbarExampleComponent } from "../../components/examples/progressbar/progressbar-example/progressbar-example.component";
import { ProgressbarDeterminedComponent } from "../../components/examples/progressbar/progressbar-determined/progressbar-determined.component";
import { ProgressbarUndeterminedComponent } from "../../components/examples/progressbar/progressbar-undetermined/progressbar-undetermined.component";
import { ProgressbarOverlayComponent } from "../../components/examples/progressbar/progressbar-overlay/progressbar-overlay.component";
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ProgressbarImportComponent } from '../../components/examples/progressbar/progressbar-import/progressbar-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ProgressbarApiComponent } from '../../components/examples/progressbar/progressbar-api/progressbar-api.component';
import { ProgressbarThemeComponent } from '../../components/examples/progressbar/progressbar-theme/progressbar-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    ProgressbarComponent,
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarDeterminedComponent,
    ProgressbarUndeterminedComponent,
    ProgressbarOverlayComponent,
    ProgressbarImportComponent,
    ProgressbarApiComponent,
    ProgressbarThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcProgressbarModule,
    ExampleViewerModule,
    DxcButtonModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarComponent,
    ProgressbarDeterminedComponent,
    ProgressbarUndeterminedComponent,
    ProgressbarOverlayComponent,
    ProgressbarImportComponent,
    ProgressbarApiComponent,
    ProgressbarThemeComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class ProgressbarModule {}
