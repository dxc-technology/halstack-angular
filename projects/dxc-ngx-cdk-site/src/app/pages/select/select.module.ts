import { NgModule } from "@angular/core";
import { DxcTableModule, DxcRadioModule, DXCSelectModule, DxcTagModule, DxcChipModule } from '@dxc-technology/halstack-angular';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { SelectComponent } from './select.component';
import { SelectDefaultComponent } from '../../components/examples/select/select-default/select-default.component';
import { SelectExampleComponent } from 'src/app/components/examples/select/select-example/select-example.component';
import { SelectIconsComponent } from '../../components/examples/select/select-icons/select-icons.component';
import { SelectPropertiesComponent } from '../../components/examples/select/properties/select-properties/select-properties.component';
import { SelectMultipleComponent } from '../../components/examples/select/select-multiple/select-multiple.component';
import { SelectSizedComponent } from '../../components/examples/select/select-sized/select-sized.component';
import { SelectUncontrolledComponent } from '../../components/examples/select/select-uncontrolled/select-uncontrolled.component';
import { SelectImportComponent } from '../../components/examples/select/select-import/select-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SelectApiComponent } from '../../components/examples/select/select-api/select-api.component';
import { SelectThemeComponent } from '../../components/examples/select/select-theme/select-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';


@NgModule({
    declarations: [
      SelectComponent,
      SelectDefaultComponent,
      SelectExampleComponent,
      SelectIconsComponent,
      SelectMultipleComponent,
      SelectPropertiesComponent,
      SelectSizedComponent,
      SelectUncontrolledComponent,
      SelectImportComponent,
      SelectApiComponent,
      SelectThemeComponent
      ],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DXCSelectModule,
      DxcTagModule,
      CodePlaygroundModule,
      ComponentsSidenavModule,
      ColorPreviewModule, 
      DxcChipModule
    ],
    exports: [
      SelectComponent,
      SelectDefaultComponent,
      SelectExampleComponent,
      SelectIconsComponent,
      SelectMultipleComponent,
      SelectPropertiesComponent,
      SelectSizedComponent,
      SelectImportComponent,
      SelectApiComponent,
      SelectThemeComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class SelectModule {}
  