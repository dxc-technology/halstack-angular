import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcProgressbarModule, DxcButtonModule,DxcTagModule } from "@dxc-technology/halstack-angular";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { ProgressbarComponent } from "./progressbar.component";
import { ProgressbarTablePropertiesComponent } from "src/app/components/examples/progressbar/properties/progressbar-table-properties.component";
import { ProgressbarExampleComponent } from "../../components/examples/progressbar/progressbar-example/progressbar-example.component";
import { ProgressbarDeterminedComponent } from "../../components/examples/progressbar/progressbar-determined/progressbar-determined.component";
import { ProgressbarUndeterminedComponent } from "../../components/examples/progressbar/progressbar-undetermined/progressbar-undetermined.component";
import { ProgressbarThemedComponent } from "../../components/examples/progressbar/progressbar-themed/progressbar-themed.component";
import { ProgressbarOverlayComponent } from "../../components/examples/progressbar/progressbar-overlay/progressbar-overlay.component";
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    ProgressbarComponent,
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarDeterminedComponent,
    ProgressbarUndeterminedComponent,
    ProgressbarThemedComponent,
    ProgressbarOverlayComponent
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
    ComponentsSidenavModule
  ],
  exports: [
    ProgressbarTablePropertiesComponent,
    ProgressbarExampleComponent,
    ProgressbarComponent,
    ProgressbarDeterminedComponent,
    ProgressbarUndeterminedComponent,
    ProgressbarThemedComponent,
    ProgressbarOverlayComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class ProgressbarModule {}
