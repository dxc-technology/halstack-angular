import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-chip",
  templateUrl: "./dxc-chip.component.html",
  providers: [CssUtils],
})
export class DxcChipComponent implements OnChanges {
  @HostBinding("class") className;
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

  prefixTabIndex = 0;
  suffixTabIndex = 0;

  defaultInputs = new BehaviorSubject<any>({
    label: "",
    suffixIconSrc: null,
    prefixIconSrc: null,
    disabled: false,
    magin: "",
  });

  constructor(private utils: CssUtils) {}

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

    if (this.prefixIconClick.observers.length === 0) {
      this.prefixTabIndex = -1;
    }

    if (this.suffixIconClick.observers.length === 0) {
      this.suffixTabIndex = -1;
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
      opacity: ${inputs.disabled ? "var(--chip-disabled)" : "1"};
      height: 22px;
      ${this.utils.getMargins(inputs.margin)}
      display: flex;
      max-width: calc(100% - 40px);
      flex-wrap: nowrap;
      text-overflow: ellipsis;
      border-radius: 48px;
      background-color: var(--chip-backgroundColor);
      padding: 10px 20px;
      width: fit-content;
      border: 1px solid var(--chip-outlinedColor);
      .labelContainer {
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--chip-fontColor);
      }
      dxc-svg {
        max-width: 24px;
        max-height: 24px;
        display: flex;
      }
      .prefixIcon {
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
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--chip-focusColor);
        }
      }
      .suffixIcon {
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
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--chip-focusColor);
        }
      }
    `;
  }
}
