import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Stylable } from '../../model/stylable';
import { css } from 'emotion';
import { ThemeBuilderService } from '../../service/theme-builder.service';
@Component({
  selector: 'tb-logo-image',
  templateUrl: './logo-config.component.html'
})
export class LogoConfigComponent implements OnInit, Stylable {

  @Input()
  logoSrc: string;

  @Input()
  propertyName: string;

  @HostBinding("class") className;

  constructor(private themeBuilderService: ThemeBuilderService) {

   }

  changeLogoSrc = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    this.themeBuilderService.onChangeCustomThemeProperty(this.propertyName, url);
  };


  getDynamicStyle = () => css`
    .tbUploadContainer{
      display: flex;
      align-items: center;
      margin-top: 5px;
    }

    .tbLogoImage{
      width: 20px;
      height: 20px;
      object-fit: contain;
      background-color: #d9d9d9;
    }

    .tbCustomUpload{
      margin-left: 10px;
      font: normal 12px/17px Open Sans;
      color: #00000099;
    }
  `;

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

}
