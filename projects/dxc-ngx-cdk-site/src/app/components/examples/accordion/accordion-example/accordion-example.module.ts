import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionExampleComponent } from './accordion-example.component';
import { ExampleViewerModule } from 'src/app/components/example-viewer/example-viewer.module';

@NgModule({
  declarations: [
    AccordionExampleComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    ExampleViewerModule
  ],
  exports: [
    AccordionExampleComponent
  ],
  entryComponents: [
  ]
})
export class AccordionExampleModule { }
