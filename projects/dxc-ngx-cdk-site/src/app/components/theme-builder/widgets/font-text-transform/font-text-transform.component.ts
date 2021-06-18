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
  selector: 'tb-font-text-transform',
  templateUrl: './font-text-transform.component.html'
})
export class FontTextTransformComponent implements OnInit, Stylable {

  transformOptions: Array<string>;

  @HostBinding("class") className;

  @Input() propertyName: string;

  @Input() propertyValue: string;

  constructor(private themeBuilderService: ThemeBuilderService) {
    this.transformOptions = ["none", "uppercase", "lowercase", "capitalize"];
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
