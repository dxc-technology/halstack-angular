import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-button",
  templateUrl: "./dxc-button.component.html",
  styleUrls: [
    "./dxc-light-button.component.scss",
    "./dxc-dark-button.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcButtonComponent {
  @Input() mode: string;
  @Input() theme: string;
  @Input() disabled: boolean;
  @Input() disableRipple: boolean;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() margin: any;
  @Input() size: string;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    mode: "basic",
    theme: "light",
    disabled: false,
    disableRipple: false,
    label: null,
    iconSrc: null,
    iconPosition: "before",
    margin: null,
    size: "medium"
  });

  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.iconPosition !== "after") {
      this.iconPosition = "before";
    }
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  sizes = {
    small: "42px",
    medium: "120px",
    large: "240px",
    fillParent: "100%",
    fitContent: "unset"
  };

  calculateWidth(margin, size) {
    if (size === "fillParent") {
      return css`
        width: calc(
          ${this.sizes[size]} - ${this.utils.getMarginValue(margin, "left")} - ${this.utils.getMarginValue(margin, "left")}
        );
      `;
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      vertical-align: middle;
      button.mat-raised-button,
      button.mat-button,
      button.mat-stroked-button,
      button.mat-flat-button {
        padding: 12px 30px;
        border-radius: 4px;
        ${this.calculateWidth(inputs.margin, inputs.size)}
        min-height: 43px;
        line-height: 19px;
        font-size: 14px;
        font-weight: 500;
        white-space: normal;
        letter-spacing: 1px;
        img {
          height: 15px;
          width: 15px;
          z-index: 20;
        }
        ::ng-deep {
          .mat-ripple-element {
            transition-duration: 200ms !important;
            transition: opacity,
              transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }
          span.mat-button-wrapper {
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 62px;

            & > span {
              display: block;
              width: 100%;
              z-index: 20;
              white-space: normal;

              text-align: center;
            }
            .icon-before {
              margin-right: 10px;
            }
            .icon-after {
              margin-left: 10px;
            }

            mat-icon {
              font-size: 20px;
              width: auto;
              height: auto;
              margin-bottom: -2.5px;
              margin-top: -2.5px;
            }

            i {
              font-size: 18px;
              margin-bottom: -2.5px;
              margin-top: -2.5px;
            }

            mat-icon:first-child,
            i:first-child {
              margin-right: 6px;

              &:last-child {
                margin-right: 6px;
                margin-left: 6px;
              }
            }

            span + mat-icon,
            span + i {
              margin-left: 6px;
            }
          }
        }

        &:attr(disabled) {
          cursor: not-allowed;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      button.mat-raised-button {
        &:disabled {
          background-color: #ffed00;
        }
      }

      button.mat-flat-button:hover:not([disabled]) {
        background-color: #d9d9d9;
      }
      button.mat-stroked-button {
        padding: 10px 28px;
      }
    `;
  }
}
