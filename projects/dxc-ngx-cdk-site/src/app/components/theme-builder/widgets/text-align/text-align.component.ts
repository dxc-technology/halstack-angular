import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Stylable } from "../../model/stylable";
import { ThemeBuilderService } from "../../service/theme-builder.service";
import { css } from "emotion";

@Component({
  selector: 'tb-text-align',
  templateUrl: './text-align.component.html'
})
export class TextAlignComponent implements OnInit, Stylable {
  transformOptions: Array<string>;

  @HostBinding("class") className;

  @Input() propertyName: string;

  @Input() propertyValue: string;
  constructor(private themeBuilderService: ThemeBuilderService) {
    this.transformOptions = [
      "left",
      "right",
      "center",
      "justify",
      "justify-all",
      "start",
      "end",
      "match-parent",
    ];

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
