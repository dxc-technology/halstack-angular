import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "dxc-link",
  templateUrl: "./dxc-link.component.html",
  providers: [CssUtils],
})
export class DxcLinkComponent {
  @Input()
  get underlined(): boolean {
    return this._underlined;
  }
  set underlined(value: boolean) {
    this._underlined = coerceBooleanProperty(value);
  }
  private _underlined = true;
  @Input()
  get inheritColor(): boolean {
    return this._inheritColor;
  }
  set inheritColor(value: boolean) {
    this._inheritColor = coerceBooleanProperty(value);
  }
  private _inheritColor;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() href: string;
  @Input()
  get newWindow(): boolean {
    return this._newWindow;
  }
  set newWindow(value: boolean) {
    this._newWindow = coerceBooleanProperty(value);
  }
  private _newWindow;
  @Input() margin: string;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;

  isClickDefined = false;

  styledLink: string = css`
    display: inline;
  `;

  styledButton: string = css`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: 0;
    font-family: inherit;
  `;

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
    this.isClickDefined = this.onClick.observers.length > 0;
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

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
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

        ${this.getUnderlineStyles(inputs)}

        ${inputs.disabled ? "pointer-events: none;" : ""}

        color: ${inputs.disabled
          ? "var(--link-disabledColor)"
          : !inputs.inheritColor
          ? "var(--link-fontColor)"
          : `inherit`} !important;

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

  private getUnderlineStyles(inputs) {
    if (inputs.underlined) {
      if (!inputs.disabled) {
        return css`
          padding-bottom: 1px !important;
          border-bottom: 1px solid var(--link-underlinedBackgroundColor);
        `;
      } else {
        return css`
          padding-bottom: 1px !important;
          border-bottom: 1px solid var(--link-disabledUnderlinedBackgroundColor);
        `;
      }
    } else {
      return css``;
    }
  }

  private getStateStyles(inputs) {
    return css`
      &:hover {
        color: var(--link-hoverFontColor) !important;
        text-decoration: none;
        padding-bottom: 1px !important;
        border-bottom: 1px solid;
        cursor: pointer;
      }

      &:visited {
        ${inputs.underlined
          ? `padding-bottom: 1px !important;
            border-bottom: 1px solid var(--link-visitedUnderlinedBackgroundColor);`
          : ``}
        ${inputs.disabled
          ? `color: var(--link-disabledColor) !important;
            border-bottom: 1px solid var(--link-disabledUnderlinedBackgroundColor);`
          : `color: var(--link-visitedFontColor) !important;`}
      }
    `;
  }
}
