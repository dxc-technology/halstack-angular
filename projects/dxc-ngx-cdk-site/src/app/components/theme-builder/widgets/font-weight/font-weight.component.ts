import {
  Component,
  OnInit,
  HostBinding,
  Input,
} from "@angular/core";
import { Stylable } from "../../model/stylable";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { css } from "emotion";
@Component({
  selector: "tb-font-weight",
  templateUrl: "./font-weight.component.html",
})
export class FontWeightComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input() propertyName: string;

  @Input() propertyValue: string;

  styleOptions: Array<string>;

  constructor(private themeBuilderService: ThemeBuilderService) {
    this.styleOptions =   ["normal",
    "bold",
    "lighter",
    "bolder",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",];
  }

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  onChangeSelectValue = (event) => {
    const val = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      val
    );
  };

  isOptionSelected = (currentOption: string) =>
    currentOption === this.propertyValue;

  getDynamicStyle = () => css`
    .tbStyledSelect {
      font: normal 12px/17px Open Sans;
      height: 23px;
    }
  `;
}
