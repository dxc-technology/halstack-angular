import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcSliderModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { SliderPropertiesComponent } from '../../components/examples/slider/properties/slider-properties/slider-properties.component';
import { SliderExampleComponent } from '../../components/examples/slider/slider-example/slider-example.component';
import { SliderImportComponent } from '../../components/examples/slider/slider-import/slider-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { SliderApiComponent } from '../../components/examples/slider/slider-api/slider-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';

@NgModule({
    declarations: [
        SliderComponent,
        SliderPropertiesComponent,
        SliderExampleComponent,
        SliderImportComponent,
        SliderApiComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        DxcTableModule,
        TabbedSectionModule,
        ExampleViewerModule,
        DxcSliderModule,
        CodesandboxViewerModule,
        DxcTagModule,
        CodePlaygroundModule,
        ComponentsSidenavModule,
        ColorPreviewModule,
        DxcChipModule,
        DxcHeadingModule
    ],
    exports: [
        SliderComponent,
        SliderPropertiesComponent,
        SliderExampleComponent,
        SliderImportComponent,
        SliderApiComponent
    ]
})
export class SliderModule { }
