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
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
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
    magin: "",
    tabIndexValue: -1,
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
    if (this.prefixIconClick.observers.length <= 0) {
      this.tabIndexValue = -1;
    }
    if (this.suffixIconClick.observers.length <= 0) {
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

  getDynamicStyle(inputs) {
    return css`
      height: 22px;
      ${this.utils.getMargins(inputs.margin)}
      display: flex;
      max-width: calc(100% - 40px);
      flex-wrap: nowrap;
      text-overflow: ellipsis;
      border-radius: 48px;
      background-color: ${inputs.disabled
        ? "var(--chip-disabledBackgroundColor)"
        : "var(--chip-backgroundColor)"};
      padding: 10px 20px;
      width: fit-content;
      border: ${inputs.disabled
        ? "1px solid var(--chip-disabledBackgroundColor)"
        : "1px solid var(--chip-outlinedColor)"};
      .labelContainer {
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${inputs.disabled
          ? "var(--chip-disabledFontColor)"
          : "var(--chip-fontColor)"};
      }
      img,
      svg {
        max-width: 24px;
        max-height: 24px;
      }
      .prefixIcon {
        opacity: ${inputs.disabled ? "0.34" : "1"};
        ${this.label ? "margin-right: 10px;" : ""};
        height: 24px;
        width: 24px;
        &:hover {
          cursor: ${inputs.disabled
            ? "not-allowed"
            : this.prefixIconClick.observers.length > 0
            ? "pointer"
            : "default"};
        }
        &:focus {
          ${this.tabIndexValue === -1 || inputs.disabled ? "outline: none;" : ""};
        }
      }
      .suffixIcon {
        opacity: ${inputs.disabled ? "0.34" : "1"};
        ${this.label ? "margin-left: 10px;" : ""};
        height: 24px;
        width: 24px;
        &:hover {
          cursor: ${inputs.disabled
            ? "not-allowed"
            : this.suffixIconClick.observers.length > 0
            ? "pointer"
            : "default"};
        }
        &:focus {
          ${this.suffixTabIndex === -1 || inputs.disabled ? "outline: none;" : ""};
        }
      }
    `;
  }
}
