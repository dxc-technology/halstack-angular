import { NgModule } from "@angular/core";
import { DxcTableModule, DxcRadioModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { RadioComponent } from './radio.component';
import { RadioExampleComponent } from 'src/app/components/examples/radio/radio-example/radio-example.component';
import { RadioPropertiesComponent } from '../../components/examples/radio/properties/radio-properties/radio-properties.component';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { RadioImportComponent } from '../../components/examples/radio/radio-import/radio-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { RadioApiComponent } from '../../components/examples/radio/radio-api/radio-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from 'src/app/components/codesandbox-viewer/codesandbox-viewer.module';

@NgModule({
    declarations: [
        RadioComponent,
        RadioExampleComponent,
        RadioPropertiesComponent,
        RadioApiComponent,
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
        CodesandboxViewerModule,
        CodePlaygroundModule,
        ComponentsSidenavModule,
        ColorPreviewModule,
        DxcChipModule,
        DxcHeadingModule
    ],
    exports: [
        RadioComponent,
        RadioExampleComponent,
        RadioPropertiesComponent,
        RadioImportComponent,
        RadioApiComponent,
    ]
})
export class RadioModule { }
