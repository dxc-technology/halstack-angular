import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DxcButtonIconComponent } from "./dxc-button-icon/dxc-button-icon.component";

@Component({
  selector: "dxc-button",
  templateUrl: "./dxc-button.component.html",
  providers: [CssUtils],
})
export class DxcButtonComponent {
  @Input() mode: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() id: string = "button"; 
  @Input() margin: any;
  @Input() size: string;
  @Input() type: string = "button";
  @Input() accessKey: string = "";
  @Input() border:boolean = true;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;

  @ContentChildren(DxcButtonIconComponent)
  dxcButtonIcon: QueryList<DxcButtonIconComponent>;

  defaultInputs = new BehaviorSubject<any>({
    mode: "primary",
    disabled: false,
    label: null,
    iconSrc: null,
    iconPosition: "before",
    margin: null,
    size: "fitContent",
    tabIndexValue: 0
  });

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (this.dxcButtonIcon.length !== 0) {
      this.iconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.iconPosition !== "after") {
      this.iconPosition = "before";
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
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  sizes = {
    small: "42px",
    medium: "120px",
    large: "240px",
    fillParent: "100%",
    fitContent: "unset",
  };

  setPadding(size) {
    if (size === "small") {
      return css`
        padding: 11px;
        min-width: calc(100% - 22px);
      `;
    }
    return css`
      padding: 12px 30px;
      min-width: unset;
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      vertical-align: middle;
      ${this.utils.calculateWidth(this.sizes, inputs)}
      button {
        padding: 12px 30px;
        ${this.setPadding(inputs.size)}
        border-radius: 4px;
        width: 100%;
        min-height: 43px;
        line-height: 19px;
        font-family: var(--fontFamily);
        font-size: 14px;
        font-weight: 500;
        white-space: normal;
        letter-spacing: 1px;
        ${this.getModeStyle()}
        span.mat-button-wrapper {
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          ${this.iconPosition === "after"
            ? "flex-direction: row-reverse;"
            : "flex-direction: row;"}

          & > span {
            display: block;
            width: 100%;
            z-index: 20;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }
          dxc-button-icon {
            display: flex;
          }
          img,
          svg {
            ${this.iconPosition === "before"
              ? "margin-right: 10px;"
              : "margin-left: 10px;"}
            height: 15px;
            width: 15px;
            z-index: 20;
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

        &:attr(disabled) {
          cursor: not-allowed;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    `;
  }

  getModeStyle() {
    if (this.mode === "secondary") {
      return this.getSecondaryStyle();
    } else if (this.mode === "text") {
      return this.getTextStyle();
    } else {
      return this.getPrimaryStyle();
    }
  }

  getPrimaryStyle() {
    return css`
      background: var(--button-primaryBackgroundColor);
      color: var(--button-primaryFontColor);
      ${this.border == true ? `span.mat-mdc-button-ripple { border: 2px solid var(--button-secondaryOutlinedColor);}` : ``}
      &:hover:not([disabled]) {
        background: var(--button-primaryHoverBackgroundColor);
        color: var(--button-primaryHoverFontColor);
      }
      &:disabled {
        background: var(--button-disabledPrimaryBackgroundColor);
        color: var(--button-disabledPrimaryFontColor) !important;
      }
      &:focus:not([disabled]) {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--button-focusColor);
      }
      &:active:not([disabled]) {
        background: var(--button-primaryActiveBackgroundColor);
      }
    `;
  }

  getSecondaryStyle() {
    return css`
      color: var(--button-secondaryFontColor);
      background-color: var(--button-secondaryBackgroundColor);
      ${this.border == true ? `span.mat-mdc-button-ripple {
        border: 2px solid var(--button-secondaryOutlinedColor);
      }` : ``}
      &:hover:not([disabled]) {
        border-color: var(--button-hoverOutlinedColor);
        background: var(--button-secondaryHoverBackgroundColor);
        color: var(--button-secondaryHoverFontColor);
      }
      &:disabled {
        border-color: var(--button-disabledSecondaryOutlinedColor);
        color: var(--button-disabledSecondaryFontColor) !important;
        ${this.border == true ? `span.mat-mdc-button-ripple {
          border: 2px solid var(--button-disabledSecondaryOutlinedColor);
        }` : ``}
      }
      &:focus {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--button-focusColor);
        background-color: var(--button-secondaryBackgroundColor);
        color: var(--button-secondaryHoverFontColor);
      }
      &:active:not([disabled]) {
        background: var(--button-secondaryActiveBackgroundColor);
        border-color: var(--button-secondaryOutlinedColor);
        color: var(--button-secondaryHoverFontColor);
      }
    `;
  }

  getTextStyle() {
    return css`
      background-color: var(--button-textBackgroundColor);
      color: var(--button-textFontColor);
      ${this.border == true ? `span.mat-mdc-button-ripple {
        border: 2px solid var(--button-secondaryOutlinedColor);
      }` : ``}
      &:hover:not([disabled]) {
        background: var(--button-textHoverBackgroundColor);
        color: var(--button-textHoverFontColor);
      }
      &:disabled {
        color: var(--button-disabledTextFontColor) !important;
      }
      &:focus {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--button-focusColor);
        background-color: var(--button-textBackgroundColor);
        color: var(--button-textFontColor);
      }
      &:active:not([disabled]) {
        background-color: var(--button-textActiveBackgroundColor);
        color: var(--button-textHoverFontColor);
      }
    `;
  }
}
