import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcLinkModule, DxcTagModule, DxcTextareaModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TextAreaComponent } from './text-area.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TextAreaApiComponent } from '../../components/examples/text-area/text-area-api/text-area-api.component';
import { TextAreaPropertiesTableComponent } from '../../components/examples/text-area/properties/text-area-properties-table/text-area-properties-table.component';
import { TextAreaExampleComponent } from '../../components/examples/text-area/text-area-example/text-area-example.component';
import { TextAreaImportComponent } from '../../components/examples/text-area/text-area-import/text-area-import.component';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';

@NgModule({
    declarations: [
        TextAreaComponent,
        TextAreaApiComponent,
        TextAreaPropertiesTableComponent,
        TextAreaExampleComponent,
        TextAreaImportComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        DxcTableModule,
        TabbedSectionModule,
        DxcTextareaModule,
        ExampleViewerModule,
        CodesandboxViewerModule,
        DxcLinkModule,
        DxcTagModule,
        CodePlaygroundModule,
        ComponentsSidenavModule,
        DxcChipModule,
        DxcHeadingModule
    ],
    exports: [
        TextAreaComponent,
        TextAreaApiComponent,
        TextAreaPropertiesTableComponent,
        TextAreaExampleComponent,
        TextAreaImportComponent
    ]
})
export class TextAreaModule { }
