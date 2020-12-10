import { NgModule } from "@angular/core";
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { DxcFooterModule, DxcTableModule,DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { FooterComponent } from './footer.component';
import { FooterExampleComponent } from '../../components/examples/footer/footer-example/footer-example.component';
import { FooterTablePropertiesComponent } from '../../components/examples/footer/properties/footer-table-properties/footer-table-properties.component';
import { FooterDefaultComponent } from '../../components/examples/footer/footer-default/footer-default.component';
import { FooterCustomContentComponent } from '../../components/examples/footer/footer-custom-content/footer-custom-content.component';
import { FooterImportComponent } from '../../components/examples/footer/footer-import/footer-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { FooterApiComponent } from '../../components/examples/footer/footer-api/footer-api.component';
import { FooterThemeComponent } from '../../components/examples/footer/footer-theme/footer-theme.component';
import { DxcHeadingModule } from '../../../../../dxc-ngx-cdk/src/lib/dxc-heading/dxc-heading.module';

@NgModule({
    declarations: [
        FooterComponent,
        FooterExampleComponent,
        FooterTablePropertiesComponent,
        FooterDefaultComponent,
        FooterCustomContentComponent,
        FooterImportComponent,
        FooterApiComponent,
        FooterThemeComponent
      ],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      DxcFooterModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcTagModule,
      CodePlaygroundModule,
      ComponentsSidenavModule,
      ColorPreviewModule,
      DxcChipModule,
      DxcHeadingModule
    ],
    exports: [
        FooterComponent,
        FooterExampleComponent,
        FooterTablePropertiesComponent,
        FooterDefaultComponent,
        FooterCustomContentComponent,
        FooterImportComponent,
        FooterApiComponent,
        FooterThemeComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class FooterModule {}