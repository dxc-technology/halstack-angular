import { NgModule } from "@angular/core";
import { DxcTableModule, DxcRadioModule,DxcTagModule,DxcChipModule } from '@dxc-technology/halstack-angular';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { RadioComponent } from './radio.component';
import { RadioExampleComponent } from 'src/app/components/examples/radio/radio-example/radio-example.component';
import { RadioPropertiesComponent } from '../../components/examples/radio/properties/radio-properties/radio-properties.component';
import { RadioGroupComponent } from '../../components/examples/radio/radio-group/radio-group.component';
import { RadioLabelPositionComponent } from '../../components/examples/radio/radio-label-position/radio-label-position.component';
import { RadioSimpleComponent } from '../../components/examples/radio/radio-simple/radio-simple.component';
import { RadioSizedComponent } from '../../components/examples/radio/radio-sized/radio-sized.component';
import { MatRadioModule } from '@angular/material';
import { RadioUncontrolledComponent } from '../../components/examples/radio/radio-uncontrolled/radio-uncontrolled.component';
import { RadioImportComponent } from '../../components/examples/radio/radio-import/radio-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { RadioThemeComponent } from '../../components/examples/radio/radio-theme/radio-theme.component';
import { RadioApiComponent } from '../../components/examples/radio/radio-api/radio-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';

@NgModule({
    declarations: [
      RadioComponent,
      RadioExampleComponent,
      RadioPropertiesComponent,
      RadioGroupComponent,
      RadioApiComponent,
      RadioThemeComponent,
      RadioLabelPositionComponent,
      RadioSimpleComponent,
      RadioSizedComponent,
      RadioUncontrolledComponent,
      RadioImportComponent
      ],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      MatRadioModule,
      DxcRadioModule,
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
        RadioComponent,
        RadioExampleComponent,
        RadioPropertiesComponent,
        RadioGroupComponent,
        RadioLabelPositionComponent,
        RadioSimpleComponent,
        RadioSizedComponent,
        RadioImportComponent,
        RadioApiComponent,
        RadioThemeComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class RadioModule {}
  