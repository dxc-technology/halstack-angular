import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcSliderModule, DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SliderPropertiesComponent } from '../../components/examples/slider/properties/slider-properties/slider-properties.component';
import { SliderExampleComponent } from '../../components/examples/slider/slider-example/slider-example.component';
import { SliderDefaultComponent } from 'src/app/components/examples/slider/slider-default/slider-default.component';
import { SliderContinuousComponent } from 'src/app/components/examples/slider/slider-continuous/slider-continuous.component';
import { SliderDisabledComponent } from 'src/app/components/examples/slider/slider-disabled/slider-disabled.component';
import { SliderDiscreteComponent } from 'src/app/components/examples/slider/slider-discrete/slider-discrete.component';
import { SliderInputComponent } from 'src/app/components/examples/slider/slider-input/slider-input.component';
import { SliderSizedComponent } from 'src/app/components/examples/slider/slider-sized/slider-sized.component';
import { SliderUnlimitedComponent } from 'src/app/components/examples/slider/slider-unlimited/slider-unlimited.component';
import { SliderUncontrolledComponent } from 'src/app/components/examples/slider/slider-uncontrolled/slider-uncontrolled.component';
import { SliderImportComponent } from '../../components/examples/slider/slider-import/slider-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SliderApiComponent } from '../../components/examples/slider/slider-api/slider-api.component';
import { SliderThemeComponent } from '../../components/examples/slider/slider-theme/slider-theme.component';

@NgModule({
  declarations: [
    SliderComponent,
    SliderPropertiesComponent,
    SliderExampleComponent,
    SliderContinuousComponent,
    SliderDefaultComponent,
    SliderDisabledComponent,
    SliderDiscreteComponent,
    SliderInputComponent,
    SliderSizedComponent,
    SliderUnlimitedComponent,
    SliderUncontrolledComponent,
    SliderImportComponent,
    SliderApiComponent,
    SliderThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcSliderModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ],
  exports: [
    SliderComponent,
    SliderPropertiesComponent,
    SliderExampleComponent,
    SliderContinuousComponent,
    SliderDefaultComponent,
    SliderDisabledComponent,
    SliderDiscreteComponent,
    SliderInputComponent,
    SliderSizedComponent,
    SliderUnlimitedComponent,
    SliderImportComponent,
    SliderApiComponent,
    SliderThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class SliderModule { }
