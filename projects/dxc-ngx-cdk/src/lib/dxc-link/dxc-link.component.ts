import { BehaviorSubject } from "rxjs";
import { css } from "@emotion/css";
import { CssUtils } from "../utils";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { DxcLinkIconComponent } from "./dxc-link-icon/dxc-link-icon.component";

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

  isClickDefined = false;

  @ContentChildren(DxcLinkIconComponent)
  dxcLinkIcon: QueryList<DxcLinkIconComponent>;

  styledLink: string = css`
    display: inline;
  `;

  styledButton: string;

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
    tabIndexValue: 0
  });

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.isClickDefined = this.onClick.observers.length > 0;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.styledButton = `${this.getDynamicStyledButton(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewChecked() {
    if (this.dxcLinkIcon.length !== 0) {
      this.iconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.styledButton = `${this.getDynamicStyledButton(
      this.defaultInputs.getValue()
    )}`;
  }

  public onClickHandler($event: any): void {
    if (!this.disabled) {
      this.onClick.emit($event);
    }
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
        ${inputs.iconPosition === "before"
          ? ""
          : "flex-direction: row-reverse;"}

        ${this.getUnderlineStyles(inputs)}

        ${inputs.disabled ? "pointer-events: none;" : ""}

        color: ${inputs.disabled
          ? "var(--link-disabledColor)"
          : !inputs.inheritColor
          ? "var(--link-fontColor)"
          : `inherit`} !important;

        ${this.getStateStyles(inputs)}

        img,svg {
          width: 16px;
          height: 16px;
          ${inputs.iconPosition === "before"
            ? "margin-right: 6px;"
            : "margin-left: 6px;"}
        }
      }
    `;
  }

  getDynamicStyledButton(inputs) {
    return css`
      background: none;
      border: none;
      padding: 0;
      cursor: ${inputs.disabled ? "default" : "pointer"};
      outline: 0;
      font-family: var(--fontFamily);
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
