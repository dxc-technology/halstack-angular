import { NgModule } from "@angular/core";
import { DxcCardModule, DxcTableModule,DxcTagModule,DxcChipModule } from '@dxc-technology/halstack-angular';
import { CardComponent } from './card.component';
import { CardActionComponent } from '../../components/examples/card/card-action/card-action.component';
import { CardDefaultComponent } from '../../components/examples/card/card-default/card-default.component';
import { CardExampleComponent } from '../../components/examples/card/card-example/card-example.component';
import { CardLinkedComponent } from '../../components/examples/card/card-linked/card-linked.component';
import { CardTablePropertiesComponent } from '../../components/examples/card/properties/card-table-properties/card-table-properties.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { CardImportComponent } from '../../components/examples/card/card-import/card-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { CardApiComponent } from '../../components/examples/card/card-api/card-api.component';
import { CardThemeComponent } from '../../components/examples/card/card-theme/card-theme.component';
import { DxcHeadingModule } from '../../../../../dxc-ngx-cdk/src/lib/dxc-heading/dxc-heading.module';

@NgModule({
  declarations: [
    CardComponent,
    CardActionComponent,
    CardDefaultComponent,
    CardExampleComponent,
    CardLinkedComponent,
    CardTablePropertiesComponent,
    CardImportComponent,
    CardApiComponent,
    CardThemeComponent
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcCardModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    CardActionComponent,
    CardDefaultComponent,
    CardLinkedComponent,
    CardTablePropertiesComponent,
    CardImportComponent,
    CardApiComponent,
    CardThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class CardModule {}
