import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePlaygroundComponent } from './code-playground.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CodePlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
  ],
  exports: [
    CodePlaygroundComponent
  ]
})
export class CodePlaygroundModule { }
