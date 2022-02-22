import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  ContentChildren,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { ChangeDetectorRef, QueryList } from "@angular/core";
import { DxcChipPrefixIconComponent } from "./dxc-chip-prefix-icon/dxc-chip-prefix-icon.component";
import { DxcChipSuffixIconComponent } from "./dxc-chip-suffix-icon/dxc-chip-suffix-icon.component";


type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-chip",
  templateUrl: "./dxc-chip.component.html",
  providers: [CssUtils],
})
export class DxcChipComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.hasTabIndexPrefix") hasTabIndexPrefix: boolean = false;
  @HostBinding("class.hasTabIndexSuffix") hasTabIndexSuffix: boolean = false;
  /**
   * Text to be placed inside the chip.
   */
  @Input() label: string;
  /**
   * @deprecated. Path of the icon to be placed after the label.
   */
  @Input() suffixIconSrc: string;
  /**
   * @deprecated. Path of the icon to be placed before the label.
   */
  @Input() prefixIconSrc: string;
  /**
   * If true, the component will be disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  /**
   * Size of the margin to be applied to the component 
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties 
   * in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * Event that will be emitted when the suffix icon is clicked.
   */
  @Output() suffixIconClick = new EventEmitter<string | undefined >();
  /**
   * Event that will be emitted when the prefix icon is clicked.
   */
  @Output() prefixIconClick = new EventEmitter<string | undefined>();
  /**
   * Element used as icon to be placed before the chip label.
   */
  @ContentChildren(DxcChipPrefixIconComponent)
  dxcChipPrefixIcon: QueryList<DxcChipPrefixIconComponent>;
  /**
   * Element used as icon to be placed after the chip label.
   */
  @ContentChildren(DxcChipSuffixIconComponent)
  dxcChipSuffixIcon: QueryList<DxcChipSuffixIconComponent>;
  /**
   * Value of the tabindex, it also applies to prefix and suffix icons when a function is given.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  defaultInputs = new BehaviorSubject<any>({
    label: "",
    suffixIconSrc: null,
    prefixIconSrc: null,
    disabled: false,
    margin: "",
    tabIndexValue: 0,
  });

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.dxcChipPrefixIcon.length !== 0) {
      this.prefixIconSrc = "";
    }
    if (this.dxcChipSuffixIcon.length !== 0) {
      this.suffixIconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  public ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (
      this.prefixIconClick.observers.length <= 0 &&
      this.suffixIconClick.observers.length <= 0
    ) {
      this.tabIndexValue = -1;
    }
  }

  handlePrefrixClick() {
    this.prefixIconClick.emit();
  }

  handleSuffixClick() {
    this.suffixIconClick.emit();
  }

  handlePrefrixKey($event) {
    if ($event.keyCode && $event.keyCode === 32) {
      $event.preventDefault();
      this.prefixIconClick.emit();
    }
  }

  handleSuffixKey($event) {
    if ($event.keyCode && $event.keyCode === 32) {
      $event.preventDefault();
      this.suffixIconClick.emit();
    }
  }

  getDisabledStyleSuffixIcon(disabled) {
    if (disabled) {
      if (this.suffixIconClick.observers.length > 0) {
        return css`
          cursor: not-allowed;
        `;
      }
    } else {
      if (this.suffixIconClick.observers.length > 0) {
        return css`
          cursor: pointer;
          &:focus {
            outline-color: var(--chip-focusColor);
          }
        `;
      }
    }
    return css`
      cursor: default;
    `;
  }

  getDisabledStylePrefixIcon(disabled) {
    if (disabled) {
      if (this.prefixIconClick.observers.length > 0) {
        return css`
          cursor: not-allowed;
        `;
      }
    } else {
      if (this.prefixIconClick.observers.length > 0) {
        return css`
          cursor: pointer;
          &:focus {
            outline-color: var(--chip-focusColor);
          }
        `;
      }
    }
    return css`
      cursor: default;
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      align-items: center;
      border-radius: var(--chip-borderRadius);
      max-width: calc(
        100% - 40px - ${this.utils.getMarginValue(inputs.margin, "left")} -
          ${this.utils.getMarginValue(inputs.margin, "right")}
      );
      min-height: 40px;
      background-color: ${inputs.disabled
        ? "var(--chip-disabledBackgroundColor)"
        : "var(--chip-backgroundColor)"};

      border-width: var(--chip-borderThickness);
      border-style: var(--chip-borderStyle);
      border-color: var(--chip-borderColor);
      padding-top: var(--chip-contentPaddingTop);
      padding-bottom: var(--chip-contentPaddingBottom);
      padding-left: var(--chip-contentPaddingLeft);
      padding-right: var(--chip-contentPaddingRight);
      ${inputs.disabled ? "cursor: not-allowed" : ""};
      cursor: ${inputs.disabled ? "not-allowed" : "default"};

      .labelContainer {
        font-size: var(--chip-fontSize);
        font-family: var(--chip-fontFamily);
        font-weight: var(--chip-fontWeight);
        font-style: var(--chip-fontStyle);
        color: ${inputs.disabled
          ? "var(--chip-disabledFontColor)"
          : "var(--chip-fontColor)"};
        ${inputs.disabled ? "cursor: not-allowed" : "default"};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .prefixIcon {
        cursor: ${inputs.disabled
          ? "not-allowed"
          : this.prefixIconClick.observers.length > 0
          ? "pointer"
          : "default"};
        color: ${inputs.disabled
          ? "var(--chip-disabledIconColor)"
          : "var(--chip-iconColor)"};
        ${this.label || this.suffixIconSrc
          ? "margin-right: var(--chip-iconSpacing);"
          : this.prefixIconSrc
          ? "5px"
          : ""};
        height: var(--chip-iconSize);
        width: var(--chip-iconSize);
        &:focus-within {
          ${this.prefixIconClick.observers.length > 0
            ? "outline: -webkit-focus-ring-color auto 1px; outline-color: var(--chip-focusColor);"
            : "outline: none"};
        }
      }
      .suffixIcon {
        cursor: ${inputs.disabled
          ? "not-allowed"
          : this.suffixIconClick.observers.length > 0
          ? "pointer"
          : "default"};
        color: ${inputs.disabled
          ? "var(--chip-disabledIconColor)"
          : "var(--chip-iconColor)"};
        ${this.label || this.suffixIconSrc
          ? "margin-left: var(--chip-iconSpacing);"
          : this.prefixIconSrc
          ? "5px"
          : ""};
        height: var(--chip-iconSize);
        width: var(--chip-iconSize);
        &:focus-within {
          ${this.suffixIconClick.observers.length > 0
            ? "outline: -webkit-focus-ring-color auto 1px; outline-color: var(--chip-focusColor);"
            : "outline: none"};
        }
      }
    `;
  }

  private getMarginLeft = () =>
    ((this.label ||
      this.dxcChipPrefixIcon?.length !== 0 ||
      this.prefixIconSrc) &&
      "10px") ||
    ((this.dxcChipPrefixIcon?.length !== 0 || this.prefixIconSrc) && "0");

  private getMarginRight = () =>
    ((this.label ||
      this.dxcChipSuffixIcon?.length !== 0 ||
      this.suffixIconSrc) &&
      "10px") ||
    ((this.dxcChipPrefixIcon?.length !== 0 || this.prefixIconSrc) && "0");
}
