import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { Stylable } from "../../model/stylable";
import { css } from "emotion";
@Component({
  selector: "tb-alpha-value-input",
  templateUrl: "./alpha-value-input.component.html",
})
export class AlphaValueInputComponent implements OnInit, Stylable {

  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;

  value: any;

  constructor(private themeBuilderService: ThemeBuilderService) {}

  ngOnInit(): void {
    this.value = this.propertyValue.match(/-?[0-9]+(.[0-9]+)?/g);
  }

  onChangeInputValue = (event) => {
    const val = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      val
    );
  };

  getDynamicStyle = () =>
    css`
      .tbAlphaValueInputContainer {
        display: flex;
        align-items: center;
      }
      .tbStyledInput {
        font: normal 12px/17px Open Sans;
        width: 75px;
      }
    `;
}
