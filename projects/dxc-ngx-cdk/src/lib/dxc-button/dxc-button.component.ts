import {
  Component,
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
  providers: [CssUtils]
})
export class DxcButtonComponent {
  @Input() mode: string;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() margin: any;
  @Input() size: string;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    mode: "secondary",
    disabled: false,
    label: null,
    iconSrc: null,
    iconPosition: "before",
    margin: null,
    size: "fitContent"
  });

  constructor(private utils: CssUtils) {}

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
    fitContent: "unset"
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
        padding: 10px 28px;
        ${this.setPadding(inputs.size)}
        border-radius: 4px;
        width: 100%;
        min-height: 43px;
        line-height: 19px;
        font-size: 14px;
        font-weight: 500;
        white-space: normal;
        letter-spacing: 1px;
        border: 2px solid transparent;
        ${this.getModeStyle()}
        img {
          height: 15px;
          width: 15px;
          z-index: 20;
        }
        span.mat-button-wrapper {
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;

          & > span {
            display: block;
            width: 100%;
            z-index: 20;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
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

        &:attr(disabled) {
          cursor: not-allowed;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    `;
  }

  getModeStyle(){
    if(this.mode === "primary"){
      return this.getPrimaryStyle();
    } else if(this.mode === "text"){
      return this.getTextStyle();
    } else {
      return this.getSecondaryStyle();
    }
  }

  getPrimaryStyle(){
    return css`
        background: var(--button-color); 
        color:var(--button-primaryFontColor);
        &:hover:not([disabled]) {
            background: var(--button-hoverColor);
            color:var(--button-primaryHoverFontColor);
        }
        &:disabled {
          opacity: var(--button-primaryDisabledOpacity);
          color:var(--button-primaryFontColor) !important;
        }
        &:focus:not([disabled]){
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--button-focusColor);
        }
        &:active:not([disabled]) {
          background: var(--button-primaryActiveOpacity);
        }
        &:active:hover{
          background: var(--button-primaryActiveHoverOpacity);
        }
    `;
  }
  getSecondaryStyle(){
    return css `
        border: 2px solid var(--button-color); 
        color:var(--button-secondaryFontColor);
        background-color: var(--button-secondaryBackgroundColor); 
        &:hover:not([disabled]) {
          border-color: var(--button-hoverColor); 
          background: var(--button-secondaryHoverOpacity);
          color:var(--button-secondaryHoverFontColor);
        }
        &:disabled {
          opacity: var(--button-secondaryDisabledOpacity);
          color:var(--button-secondaryFontColor) !important; 
        }
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--button-focusColor);
        }
        &:active:not([disabled]) {
          background: var(--button-secondaryActiveOpacity);
          border-color: var(--button-color); 
        }
        &:active:hover{
          background: var(--button-secondaryActiveHoverOpacity);
          border-color: var(--button-hoverColor); 
        }
    `;
  }
  getTextStyle(){
    return css `
        background-color: var(--button-textBackgroundColor);
        color: var(--button-textFontColor);
        &:hover:not([disabled]) {
          background: var(--button-hoverColor);
          color: var(--button-textHoverFontColor);
        }
        &:disabled {
          opacity: var(--button-textDisabledOpacity); 
          color: var(--button-textFontColor) !important;
        }
        &:focus {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--button-focusColor);
        }
        &:active {
          background: var(--button-textActiveOpacity);
          color: var(--button-textFontColor);
        }
        &:active:hover{
          background: var(--button-textActiveHoverOpacity);
          color: var(--button-textHoverFontColor);
        }
    `;
  }
}
