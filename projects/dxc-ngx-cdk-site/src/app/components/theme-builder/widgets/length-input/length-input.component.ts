import {
  Component,
  Input,
  OnInit,
  HostBinding,
} from "@angular/core";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { Stylable } from "../../model/stylable";
import { css } from "emotion";
@Component({
  selector: "tb-length-input",
  templateUrl: "./length-input.component.html"})
export class LengthInputComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;

  unitValue: string;

  value: any;

  unitOptions: Array<string>;
  constructor(private themeBuilderService: ThemeBuilderService) {
    this.unitOptions = [
      "cm",
      "mm",
      "in",
      "px",
      "pt",
      "pc",
      "em",
      "ex",
      "ch",
      "rem",
      "vw",
      "vh",
      "vmin",
      "vmax",
      "%",
    ];
  }

  ngOnInit(): void {
    this.unitValue = this.propertyValue === "none" ? "px" :
      this.propertyValue.match(/[a-zA-Z]+|%/g) &&
      this.propertyValue.match(/[a-zA-Z]+|%/g)[0];
    this.value = this.propertyValue.match(/-?[0-9]+(.[0-9]+)?/g);
    this.className = this.getDynamicStyle();
  }

  onChangeInputValue = (event) => {
    this.value = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      this.value + (this.unitValue ? this.unitValue : 'px')
    );
  };

  onChangeSelectValue = (event) => {
    this.unitValue = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      this.value + (this.unitValue ? this.unitValue : 'px')
    );
  };

  trackByFuntion = (index, item) => index;

  isOptionSelected = (currentOption: string) =>
    currentOption === this.unitValue;

  getDynamicStyle = () =>
    css`
      .tbLengthInputContainer {
        display: flex;
        align-items: center;
      }
      .tbStyledInput {
        font: normal 12px/17px Open Sans;
        width: 75px;
      }

      .tbStyledSelect {
        margin-left: 5px;
        font: normal 12px/17px Open Sans;
        height: 23px;
        width: 55px;
      }
    `;
}
