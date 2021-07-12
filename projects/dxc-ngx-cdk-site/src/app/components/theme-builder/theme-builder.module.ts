import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './widgets/color-picker/color-picker.component';
import { ThemeInputComponent } from './theme-input/theme-input.component';
import { ThemeInputsConfigComponent } from './theme-inputs-config/theme-inputs-config.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ComponentPreviewComponent } from './component-preview/component-preview.component';
import { DxcHeadingModule, DxcAccordionModule } from '@dxc-technology/halstack-angular';
import { ComponentModeComponent } from './component-mode/component-mode.component';
import { ThemeBuilderDynamicModule } from './dynamic-component/theme-builder-dynamic.module';
import { DefaultInputComponent } from './widgets/default-input/default-input.component';
import { LengthInputComponent } from './widgets/length-input/length-input.component';
import { FontFamilyComponent } from './widgets/font-family/font-family.component';
import { FontWeightComponent } from './widgets/font-weight/font-weight.component';
import { FontTextTransformComponent } from './widgets/font-text-transform/font-text-transform.component';
import { BorderStyleComponent } from './widgets/border-style/border-style.component';
import { BorderWidthInputComponent } from './widgets/border-width-input/border-width-input.component';
import { AlphaValueInputComponent } from './widgets/alpha-value-input/alpha-value-input.component';
import { IntegerComponent } from './widgets/integer/integer.component';
import { TextAlignComponent } from './widgets/text-align/text-align.component';
import { FontStyleComponent } from './widgets/font-style/font-style.component';
import { LogoConfigComponent } from './widgets/logo-config/logo-config.component';



@NgModule({
  declarations: [
    ColorPickerComponent,
    ThemeInputsConfigComponent,
    ThemeInputComponent,
    DefaultInputComponent,
    ComponentPreviewComponent,
    ComponentModeComponent,
    LengthInputComponent,
    FontFamilyComponent,
    FontWeightComponent,
    FontTextTransformComponent,
    BorderStyleComponent,
    BorderWidthInputComponent,
    AlphaValueInputComponent,
    IntegerComponent,
    TextAlignComponent,
    FontStyleComponent,
    LogoConfigComponent
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
