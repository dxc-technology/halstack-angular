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

@Component({
  selector: "dxc-chip",
  templateUrl: "./dxc-chip.component.html",
  providers: [CssUtils],
})
export class DxcChipComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.hasTabIndexPrefix") hasTabIndexPrefix: boolean = false;
  @HostBinding("class.hasTabIndexSuffix") hasTabIndexSuffix: boolean = false;
  @Input() label: string;
  @Input() suffixIconSrc: string;
  @Input() prefixIconSrc: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() margin: any;

  @Output() suffixIconClick = new EventEmitter<any>();
  @Output() prefixIconClick = new EventEmitter<any>();

  @ContentChildren(DxcChipPrefixIconComponent)
  dxcChipPrefixIcon: QueryList<DxcChipPrefixIconComponent>;

  @ContentChildren(DxcChipSuffixIconComponent)
  dxcChipSuffixIcon: QueryList<DxcChipSuffixIconComponent>;

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
      max-width: calc(100% - 40px - ${this.utils.getMarginValue(
        inputs.margin,
        "left"
      )} - ${this.utils.getMarginValue(inputs.margin, "right")});
      background-color: ${
        inputs.disabled
          ? "var(--chip-disabledBackgroundColor)"
          : "var(--chip-backgroundColor)"
      };

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
        color: ${
          inputs.disabled
            ? "var(--chip-disabledFontColor)"
            : "var(--chip-fontColor)"
        };
         ${inputs.disabled ? "cursor: not-allowed" : "default"};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }


      .iconContainer {
        opacity: ${inputs.disabled ? "0.34" : "1"};
        width: var(--chip-iconSize);
        height: var(--chip-iconSize);
        overflow: hidden;
        padding-left: var(--chip-iconPaddingLeft);
        padding-right: var(--chip-iconPaddingRight);
        ${this.dxcChipPrefixIcon?.length !== 0 ? `margin-right: ${this.getMarginRight()}` :
        `margin-left: ${this.getMarginLeft()}`}
        img,
        svg {
          height: 100%;
          width: 100%;
        }
      }


      .prefixIcon {
        cursor: ${inputs.disabled ? "not-allowed" : "default"};
        ${this.label || this.suffixIconSrc ? "margin-right: 10px;" : (this.prefixIconSrc ?  "5px" : "")};
        height: var(--chip-iconSize);
        width: var(--chip-iconSize);
        padding-left: var(--chip-iconPaddingLeft);
        padding-right: var(--chip-iconPaddingRight);

      }
      .suffixIcon {
        cursor: ${inputs.disabled ? "not-allowed" : "default"};
        ${this.label || this.suffixIconSrc ? "margin-left: 10px;" : (this.prefixIconSrc ?  "5px" : "")};
        height: var(--chip-iconSize);
        width: var(--chip-iconSize);
        padding-left: var(--chip-iconPaddingLeft);
        padding-right: var(--chip-iconPaddingRight);

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
