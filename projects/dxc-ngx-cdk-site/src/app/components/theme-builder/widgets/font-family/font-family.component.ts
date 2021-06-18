import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  Input,
} from "@angular/core";
import { Stylable } from "../../model/stylable";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { css } from "emotion";
@Component({
  selector: "tb-font-family",
  templateUrl: "./font-family.component.html",
})
export class FontFamilyComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input() propertyName: string;

  @Input() propertyValue: string;

  value: string;

  unitValue: string;

  fontFamilyOptions: Array<string>;

  constructor(private themeBuilderService: ThemeBuilderService) {
    this.fontFamilyOptions = ["serif", "sans-serif", "monospace", "cursive", "fantasy"];
  }

  ngOnInit(): void {
    this.value = this.propertyValue.split(", ")[0];
    this.unitValue = this.propertyValue.split(", ")[1];
    console.log(this.unitValue);
    this.className = this.getDynamicStyle();
  }

  onChangeInputValue = (event) => {
    const val = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      `${val}, ${this.unitValue}`
    );
  };

  onChangeSelectValue = (event) => {
    const val = event.target.value;
    console.log(`${this.propertyValue.split(",")[0]}, ${val}`);
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      `${this.propertyValue.split(",")[0]}, ${val}`
    );
  };

  isOptionSelected = (currentOption: string) =>
    currentOption === this.unitValue;

  getDynamicStyle = () => css`
    .tbFontFamilyContainer {
      display: flex;
    }
    .tbStyledInput {
      font: normal 12px/17px Open Sans;
      width: 75px;
    }

    .tbStyledSelect {
      margin-left: 5px;
      font: normal 12px/17px Open Sans;
      height: 23px;
      width: 80px;
    }
  `;
}
