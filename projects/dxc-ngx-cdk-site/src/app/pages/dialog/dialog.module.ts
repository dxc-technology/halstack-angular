import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcButtonModule, DxcDialogModule,DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule} from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { DialogTablePropertiesComponent } from "src/app/components/examples/dialog/properties/dialog-table-properties.component";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { DialogExampleComponent } from "../../components/examples/dialog/dialog-example/dialog-example.component";
import { DialogComponent } from "./dialog.component";
import {DialogDefaultComponent} from "../../components/examples/dialog/dialog-default/dialog-default.component";
import {DialogModalComponent} from "../../components/examples/dialog/dialog-modal/dialog-modal.component";
import {DialogCloseComponent} from "../../components/examples/dialog/dialog-close/dialog-close.component";
import { DialogImportComponent } from '../../components/examples/dialog/dialog-import/dialog-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { DialogApiComponent } from '../../components/examples/dialog/dialog-api/dialog-api.component';
import { DialogThemeComponent } from '../../components/examples/dialog/dialog-theme/dialog-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
  declarations: [
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogDefaultComponent,
    DialogModalComponent,
    DialogCloseComponent,
    DialogImportComponent,
    DialogApiComponent,
    DialogThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcDialogModule,
    DxcButtonModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule
  ],
  exports: [
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogDefaultComponent,
    DialogModalComponent,
    DialogCloseComponent,
    DialogImportComponent,
    DialogApiComponent,
    DialogThemeComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class DialogModule {}
