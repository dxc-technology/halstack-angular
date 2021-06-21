import { Component, OnInit, HostBinding, Input, ViewContainerRef } from '@angular/core';
import { css } from 'emotion';
import { ThemeBuilderService } from '../../service/theme-builder.service';
import { TinyColor } from '@ctrl/tinycolor';

@Component({
  selector: 'tb-color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  colorName: string;

  @Input()
  propertyName: string;

  color: string;

  backgroundType: string;

  constructor(public vcRef: ViewContainerRef, private themeBuilderService: ThemeBuilderService) {

   }

  ngOnInit(): void {
    this.color = this.colorName;
    this.backgroundType = this.checkColorType(this.color);
    this.className =  this.getDynamicStyle();
  }

  onColorPickerChange = (color:string) => {
    this.backgroundType = this.checkColorType(color);
    this.className = this.getDynamicStyle();
    this.themeBuilderService.onChangeCustomThemeProperty(this.propertyName, color);
  }

  private checkColorType(color:string):string{
    const colorInstance = new TinyColor(color);
    return colorInstance.isDark() ? 'dark' : 'light';
  }

  getDynamicStyle(){
    return css`
    .propertyContainer{
      display: flex;
      align-items: center;
    }

    .propertyName{
      border-radius: 8px;
      cursor: pointer;
      margin-left: 10px;
      font: normal 12px/17px Open Sans;
      ${this.backgroundType === 'dark'
      ? css`
          color: #FFFFFF;
        `
      : css`
        color: #000000;
      `}
      line-height: 13px;
    }
    `;
  }
}
