import { NgModule } from "@angular/core";
import {
  DxcTableModule,
  DxcTagModule,
  DxcChipModule,
} from "@dxc-technology/halstack-angular";
import { ChipComponent } from "./chip.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { ComponentsSidenavModule } from "../components-sidenav/components-sidenav.module";
import { CodePlaygroundModule } from "../../components/code-playground/code-playground.module";
import { ChipBasicComponent } from "src/app/components/examples/chip/chip-basic/chip-basic.component";
import { ChipExampleComponent } from "src/app/components/examples/chip/chip-example/chip-example.component";
import { ChipTablePropertiesComponent } from "src/app/components/examples/chip/properties/box-table-properties/chip-table-properties.component";
import { ChipImportComponent } from "src/app/components/examples/chip/chip-import/chip-import.component";
import { ChipDisabledComponent } from 'src/app/components/examples/chip/chip-disabled/chip-disabled.component';
import { ChipApiComponent } from '../../components/examples/chip/chip-api/chip-api.component';
import { ChipThemeComponent } from '../../components/examples/chip/chip-theme/chip-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    ChipComponent,
    ChipBasicComponent,
    ChipDisabledComponent,
    ChipExampleComponent,
    ChipTablePropertiesComponent,
    ChipImportComponent,
    ChipApiComponent,
    ChipThemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcChipModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule
  ],
  exports: [
    ChipComponent,
    ChipBasicComponent,
    ChipDisabledComponent,
    ChipExampleComponent,
    ChipTablePropertiesComponent,
    ChipImportComponent,
    ChipApiComponent,
    ChipThemeComponent
  ],
  entryComponents: [ExampleViewerComponent],
})
export class ChipModule {}
