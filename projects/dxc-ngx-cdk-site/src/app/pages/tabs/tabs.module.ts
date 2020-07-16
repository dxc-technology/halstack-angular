import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcTabsModule,DxcTagModule } from "@diaas/dxc-ngx-cdk";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { TabsComponent } from "./tabs.component";
import { TabsTablePropertiesComponent } from "src/app/components/examples/tabs/properties/tabs-table-properties.component";
import { TabsDefaultComponent } from "../../components/examples/tabs/tabs-default/tabs-default.component";
import { TabsExampleComponent } from "../../components/examples/tabs/tabs-example/tabs-example.component";
import { TabsThemedComponent } from "../../components/examples/tabs/tabs-themed/tabs-themed.component";
import { TabsUnderlinedComponent } from "../../components/examples/tabs/tabs-underlined/tabs-underlined.component";
import { TabsContentComponent } from "../../components/examples/tabs/tabs-content/tabs-content.component";
import { TabsUncontrolledComponent } from '../../components/examples/tabs/tabs-uncontrolled/tabs-uncontrolled.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabsTablePropertiesComponent,
    TabsDefaultComponent,
    TabsExampleComponent,
    TabsThemedComponent,
    TabsUnderlinedComponent,
    TabsContentComponent,
    TabsUncontrolledComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcTabsModule,
    ExampleViewerModule,
    DxcTagModule
  ],
  exports: [
    TabsComponent,
    TabsTablePropertiesComponent,
    TabsDefaultComponent,
    TabsExampleComponent,
    TabsThemedComponent,
    TabsUnderlinedComponent,
    TabsContentComponent
  ],
  entryComponents: [ExampleViewerComponent]
})
export class TabsModule {}
