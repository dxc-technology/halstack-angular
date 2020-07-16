import { NgModule } from "@angular/core";
import { PortalModule } from '@angular/cdk/portal';
import { DxcButtonModule, DxcTableModule } from '@diaas/dxc-ngx-cdk';
import { MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  ],
  entryComponents: [
      DynamicComponentComponent
  ]
})
export class ExampleViewerModule {}
