import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ThemeInputComponent } from './theme-input/theme-input.component';
import { ThemeInputsConfigComponent } from './theme-inputs-config/theme-inputs-config.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { DefaultInputComponent } from './default-input/default-input.component';
import { ComponentPreviewComponent } from './component-preview/component-preview.component';
import { DxcHeadingModule, DxcAccordionModule } from '@dxc-technology/halstack-angular';
import { ComponentModeComponent } from './component-mode/component-mode.component';
import { ThemeBuilderDynamicModule } from './dynamic-component/theme-builder-dynamic.module';



@NgModule({
  declarations: [
    ColorPickerComponent,
    ThemeInputsConfigComponent,
    ThemeInputComponent,
    DefaultInputComponent,
    ComponentPreviewComponent,
    ComponentModeComponent
  ],
  imports: [
    CommonModule,
    ColorPickerModule,
    DxcHeadingModule,
    DxcAccordionModule,
    ThemeBuilderDynamicModule
  ],
  exports: [
    ColorPickerComponent,
    ComponentPreviewComponent,
    ComponentModeComponent,
    ThemeInputComponent,
    ThemeInputsConfigComponent
  ]
})
export class ThemeBuilderModule { }
