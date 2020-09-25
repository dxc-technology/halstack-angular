import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "dxc-link",
  templateUrl: "./dxc-link.component.html",
  providers: [CssUtils],
})
export class DxcLinkComponent {
  @Input() underlined: boolean;
  @Input() inheritColor: boolean;
  @Input() disabled: boolean;
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() href: string;
  @Input() newWindow: boolean;
  @Input() margin: string;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    underlined: true,
    inheritColor: false,
    disabled: false,
    text: null,
    iconSrc: null,
    iconPosition: "before",
    href: null,
    newWindow: false,
    margin: null,
  });

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      a {
        ${this.utils.getMargins(inputs.margin)}

        display: inline-flex;
        align-items: center;
        max-width: 100%;
        font-size: 16px;
        padding-bottom: 2px;
        text-decoration: none;

        ${
          inputs.underlined
            ? `padding-bottom: 1px !important;
        border-bottom: 1px solid;`
            : ``
        }

        ${inputs.disabled ? "pointer-events: none;" : ""}

        color: ${
          inputs.disabled
            ? "var(--link-disabledColor)"
            : !inputs.inheritColor
            ? "var(--link-fontColor)"
            : `inherit`
        } !important;

        ${this.getStateStyles(inputs)}

        img {
          width: 16px;
          height: 16px;
        }
        .icon-before {
          margin-right: 6px;
        }
        .icon-after {
          margin-left: 6px;
        }
      }
    `;
  }

  private getStateStyles(inputs) {
    return css`
      &:hover {
        color: var(--link-hoverColor) !important;
        text-decoration: none;
        padding-bottom: 1px !important;
        border-bottom: 1px solid;
        cursor: pointer;
      }

      &:visited {
        ${inputs.disabled
          ? `color: var(--link-disabledColor) !important;`
          : `color: var(--link-visitedColor) !important;`}
      }
    `;
  }
}
