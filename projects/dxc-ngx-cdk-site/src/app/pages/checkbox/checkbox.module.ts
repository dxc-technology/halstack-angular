import { NgModule } from "@angular/core";
import { DxcCheckboxModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxDarkThemeComponent } from '../../components/examples/checkbox/checkbox-dark-theme/checkbox-dark-theme.component';
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
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
    declarations: [
      CheckboxComponent,
      CheckboxDarkThemeComponent,
      CheckboxExampleComponent,
      CheckboxLabelPositionComponent,
      CheckboxPropertiesComponent,
      CheckboxSimpleComponent,
      CheckboxSizedComponent,
      CheckboxUncontrolledComponent
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
      ComponentsSidenavModule
    ],
    exports: [
        CheckboxComponent,
        CheckboxExampleComponent,
        CheckboxDarkThemeComponent,
        CheckboxLabelPositionComponent,
        CheckboxPropertiesComponent,
        CheckboxSimpleComponent,
        CheckboxSizedComponent
    ],
    entryComponents: [
      ExampleViewerComponent
    ]
  })
  export class CheckboxModule {}
  