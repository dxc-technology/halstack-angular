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
  selector: 'tb-font-style',
  templateUrl: './font-style.component.html'
})
export class FontStyleComponent implements OnInit, Stylable  {
  @HostBinding("class") className;

  @Input() propertyName: string;

  @Input() propertyValue: string;

  styleOptions: Array<string>;
  constructor(private themeBuilderService: ThemeBuilderService) {
    this.styleOptions =["normal", "italic", "oblique"];
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
