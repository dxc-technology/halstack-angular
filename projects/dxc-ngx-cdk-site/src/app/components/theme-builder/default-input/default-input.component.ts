import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { css } from 'emotion';
import { Stylable } from '../model/stylable';
import { ThemeBuilderService } from '../service/theme-builder.service';

@Component({
  selector: 'builder-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.scss']
})
export class DefaultInputComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;
  constructor(private themeBuilderService: ThemeBuilderService) { }


  onChangeValue = ($event) => {
    console.log($event.target.value);
    this.themeBuilderService.onChangeCustomTheme(this.propertyValue, $event.target.value);
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
