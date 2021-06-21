import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { Stylable } from "../../model/stylable";
import { css } from "emotion";
@Component({
  selector: 'tb-integer',
  templateUrl: './integer.component.html'
})
export class IntegerComponent implements OnInit,  Stylable {

  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;

  value: any;

  constructor(private themeBuilderService: ThemeBuilderService) {}

  onChangeInputValue = (event) => {
    const val = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      val
    );
  };
  ngOnInit(): void {
    this.value = this.propertyValue.match(/-?[0-9]+(.[0-9]+)?/g);
  }


  getDynamicStyle = () =>
    css`
      .tbIntegerInputContainer {
        display: flex;
        align-items: center;
      }
      .tbStyledInput {
        font: normal 12px/17px Open Sans;
        width: 75px;
      }
    `;
}
