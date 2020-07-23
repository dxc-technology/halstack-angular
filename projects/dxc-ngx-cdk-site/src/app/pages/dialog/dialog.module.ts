import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcButtonModule, DXCDialogModule,DxcTagModule } from '@dxc-technology/halstack-angular';
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

@NgModule({
  declarations: [
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogDefaultComponent,
    DialogModalComponent,
    DialogCloseComponent,
    DialogImportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCDialogModule,
    DxcButtonModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports: [
    DialogTablePropertiesComponent,
    DialogExampleComponent,
    DialogComponent,
    DialogDefaultComponent,
    DialogModalComponent,
    DialogCloseComponent,
    DialogImportComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class DialogModule {}
