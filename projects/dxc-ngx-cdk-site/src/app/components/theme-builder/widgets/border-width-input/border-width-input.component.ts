import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { Stylable } from "../../model/stylable";
import { css } from "emotion";

@Component({
  selector: "tb-border-width-input",
  templateUrl: "./border-width-input.component.html",
})
export class BorderWidthInputComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  @Input()
  propertyValue: string;

  @Input()
  propertyName: string;

  unitValue: string;

  value: any;

  constructor(private themeBuilderService: ThemeBuilderService) {}

  ngOnInit(): void {
    this.unitValue =
      this.propertyValue.match(/[a-zA-Z]+|%/g) &&
      this.propertyValue.match(/[a-zA-Z]+|%/g)[0];
    this.value = this.propertyValue.match(/-?[0-9]+(.[0-9]+)?/g);
    this.className = this.getDynamicStyle();
  }

  onChangeInputValue = (event) => {
    const val = event.target.value;
    this.themeBuilderService.onChangeCustomThemeProperty(
      this.propertyName,
      val + this.unitValue
    );
  };

  getDynamicStyle = () =>
  css`
    .tbBorderWidthContainer {
      display: flex;
      align-items: center;
    }
    .tbStyledInput {
      font: normal 12px/17px Open Sans;
      width: 100px;
    }

    .tbStyledLabel {
      font: normal 12px/17px Open Sans;
      padding-left: 5px;
    }
  `;

}
