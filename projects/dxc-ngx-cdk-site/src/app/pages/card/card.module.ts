import { NgModule } from "@angular/core";
import { DxcCardModule, DxcTableModule,DxcTagModule,DxcChipModule,DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { CardComponent } from './card.component';
import { CardExampleComponent } from '../../components/examples/card/card-example/card-example.component';
import { CardTablePropertiesComponent } from '../../components/examples/card/properties/card-table-properties/card-table-properties.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { CardImportComponent } from '../../components/examples/card/card-import/card-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { CardApiComponent } from '../../components/examples/card/card-api/card-api.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';
import { StatusTagModule } from "src/app/components/status-tag/status-tag.module";

@NgModule({
  declarations: [
    CardComponent,
    CardExampleComponent,
    CardTablePropertiesComponent,
    CardImportComponent,
    CardApiComponent,
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    DxcCardModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule,
    CodesandboxViewerModule,
    StatusTagModule
  ],
  exports: [
    CardTablePropertiesComponent,
    CardImportComponent,
    CardApiComponent,
  ]
})
export class CardModule {}
