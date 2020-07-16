import { NgModule } from "@angular/core";
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { DXCFooterModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { FooterComponent } from './footer.component';
import { FooterExampleComponent } from '../../components/examples/footer/footer-example/footer-example.component';
import { FooterTablePropertiesComponent } from '../../components/examples/footer/properties/footer-table-properties/footer-table-properties.component';
import { FooterDefaultComponent } from '../../components/examples/footer/footer-default/footer-default.component';
import { FooterCustomContentComponent } from '../../components/examples/footer/footer-custom-content/footer-custom-content.component';

@NgModule({
    declarations: [
        FooterComponent,
        FooterExampleComponent,
        FooterTablePropertiesComponent,
        FooterDefaultComponent,
        FooterCustomContentComponent
      ],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      DXCFooterModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcTagModule
    ],
    exports: [
        FooterComponent,
        FooterExampleComponent,
        FooterTablePropertiesComponent,
        FooterDefaultComponent,
        FooterCustomContentComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class FooterModule {}