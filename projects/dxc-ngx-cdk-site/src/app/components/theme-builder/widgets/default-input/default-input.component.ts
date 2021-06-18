import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { css } from 'emotion';
import { Stylable } from '../../model/stylable';
import { ThemeBuilderService } from '../../service/theme-builder.service';

@Component({
  selector: 'tb-default-input',
  templateUrl: './default-input.component.html'
})
export class DefaultInputComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;
  constructor(private themeBuilderService: ThemeBuilderService) { }


  onChangeValue = ($event) => {
    this.themeBuilderService.onChangeCustomThemeProperty(this.propertyName, $event.target.value);
  }

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  getDynamicStyle(){
    return css`
    .defaultInputContainer{
      display: flex;
      align-items: center;
    }

    .styledInput{
      margin-left: 10px;
      font: normal 12px/17px Open Sans;
    }
    `;
  }

}
