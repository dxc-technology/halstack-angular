import { NgModule } from "@angular/core";
import { PortalModule } from '@angular/cdk/portal';
import { DxcButtonModule, DxcTableModule } from '@dxc-technology/halstack-angular';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { DynamicModule } from '../dynamic-component/dynamic.module';
import { ExampleViewerComponent } from './example-viewer.component';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { CodePlaygroundModule } from '../code-playground/code-playground.module';

@NgModule({
    declarations: [
        ExampleViewerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        MatIconModule,
        MatTabsModule,
        DynamicModule,
        CodePlaygroundModule,
        MonacoEditorModule.forRoot() // use forRoot() in main app module only.
    ],
    exports: [
        ExampleViewerComponent
    ]
})
export class ExampleViewerModule {}
