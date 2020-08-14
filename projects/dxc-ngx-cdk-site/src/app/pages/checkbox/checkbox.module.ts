import { NgModule } from "@angular/core";
import { DxcCheckboxModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxLabelPositionComponent } from '../../components/examples/checkbox/checkbox-label-position/checkbox-label-position.component';
import { CheckboxPropertiesComponent } from '../../components/examples/checkbox/properties/checkbox-properties/checkbox-properties.component';
import { CheckboxSimpleComponent } from '../../components/examples/checkbox/checkbox-simple/checkbox-simple.component';
import { CheckboxSizedComponent } from '../../components/examples/checkbox/checkbox-sized/checkbox-sized.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CheckboxExampleComponent } from '../../components/examples/checkbox/checkbox-example/checkbox-example.component';
import { CheckboxUncontrolledComponent } from '../../components/examples/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.component';
import { CheckboxImportComponent } from '../../components/examples/checkbox/checkbox-import/checkbox-import.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { CheckboxApiComponent } from '../../components/examples/checkbox/checkbox-api/checkbox-api.component';
import { CheckboxThemeComponent } from '../../components/examples/checkbox/checkbox-theme/checkbox-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
@NgModule({
    declarations: [
      CheckboxComponent,
      CheckboxExampleComponent,
      CheckboxLabelPositionComponent,
      CheckboxPropertiesComponent,
      CheckboxSimpleComponent,
      CheckboxSizedComponent,
      CheckboxUncontrolledComponent,
      CheckboxImportComponent,
      CheckboxApiComponent,
      CheckboxThemeComponent
      ],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      DxcCheckboxModule,
      TabbedSectionModule,
      ExampleViewerModule,
      DxcTableModule,
      DxcTagModule,
      CodePlaygroundModule,
      ComponentsSidenavModule,
      ColorPreviewModule
    ],
    exports: [
        CheckboxComponent,
        CheckboxExampleComponent,
        CheckboxLabelPositionComponent,
        CheckboxPropertiesComponent,
        CheckboxSimpleComponent,
        CheckboxSizedComponent,
        CheckboxImportComponent,
        CheckboxApiComponent,
        CheckboxThemeComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class CheckboxModule {}
  