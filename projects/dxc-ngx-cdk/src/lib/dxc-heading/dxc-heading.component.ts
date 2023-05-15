import { css } from "@emotion/css";
import { CssUtils } from "../utils";
import { BehaviorSubject } from "rxjs";
import { Component, Input, HostBinding, SimpleChanges } from "@angular/core";

@Component({
  selector: "dxc-heading",
  templateUrl: "./dxc-heading.component.html",
  providers: [CssUtils],
})
export class DxcHeadingComponent {
  @Input() level: number;
  @Input() text: string;
  @Input() weight: string;
  @Input() margin: string;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    level: 1,
    text: null,
    weight: null,
    margin: null,
  });

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.level == null) {
      this.level = 1;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.level == null) {
      this.level = 1;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .container {
        ${this.utils.getMargins(inputs.margin)}
      }

      font-family: var(--fontFamily);
      color: var(--heading-fontColor);

      h1 {
        font-size: 60px;
        line-height: 82px;
        font-weight: ${inputs.weight === "light" || inputs.weight == null
          ? 200
          : inputs.weight === "normal"
          ? 400
          : 600};
        margin: 0px;
        letter-spacing: -0.53px;
        margin: 0px;
      }

      h2,
      h3,
      h4,
      h5 {
        font-weight: ${inputs.weight === "normal" || inputs.weight == null
          ? 400
          : inputs.weight === "light"
          ? 200
          : 600};
        margin: 0px;
      }

      h2 {
        font-size: 48px;
        line-height: 65px;
        letter-spacing: 0px;
      }

      h3 {
        font-size: 34px;
        line-height: 46px;
        letter-spacing: 0.24px;
      }

      h4 {
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0px;
      }

      h5 {
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.26px;
      }
    `;
  }
}
