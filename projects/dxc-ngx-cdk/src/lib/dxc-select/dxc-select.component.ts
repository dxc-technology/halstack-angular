import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-select",
  templateUrl: "./dxc-select.component.html",
  styleUrls: ["./dxc-select.component.scss"],
  providers: [CssUtils],
})
export class DxcSelectComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.select-icons") onlyHasIcons: boolean = false;

  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple;
  @Input() public value: string | string[];
  @Input() public options: {
    label?: string;
    value: string;
    iconSrc?: string;
  }[];
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public label: string;
  @Input() public margin: any;
  @Input() public size: string = "medium";
  @Input() public assistiveText: string;
  @Input()
  get invalid(): boolean {
    return this._invalid;
  }
  set invalid(value: boolean) {
    this._invalid = coerceBooleanProperty(value);
  }
  private _invalid = false;
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("dxcSelect", { static: true }) dxcSelect;

  renderedValue: string | string[];

  public iconsToShow: string[] = []; //Auxiliar property used to get iconSRC for several values
  public labeltoShow: string[] = []; //The value is not the correct valur to display. Use label instead

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    required: false,
    iconPosition: "before",
    label: "",
    size: "medium",
    invalid: false
  });

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };
  constructor(private utils: CssUtils) {}

  public ngOnInit(): void {
    this.renderedValue = this.value || "";

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    if (this.renderedValue) {
      this.getIconAndLabelByValue(this.renderedValue);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.hasOptionsOnlyIcons();

    this.renderedValue = this.value || "";

    this.getIconAndLabelByValue(this.renderedValue);

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public valueChanged($event: any): void {
    this.onChange.emit($event.value);
    this.renderedValue = $event.value;
    if (this.value === undefined || this.value === null) {
      this.getIconAndLabelByValue(this.renderedValue);
    } else {
      $event.source.writeValue(this.renderedValue);
    }
  }

  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        (option) => option.iconSrc && !option.label
      );
    }
  }

  public getIconAndLabelByValue(value: any) {
    this.iconsToShow = [];
    this.labeltoShow = [];
    const multipleValue = Array.isArray(value) ? value : [value];
    multipleValue.map((value) => {
      const element = this.options.filter((item) => item.value == value);
      if (element !== undefined && element[0]) {
        this.iconsToShow.push(element[0].iconSrc);
        this.labeltoShow.push(element[0].label);
      }
    });
  }

  openSelect($event: any) {
    if ($event.keyCode && ($event.keyCode === 40 || $event.keyCode === 38)) {
      this.dxcSelect.open();
    }
  }

  getInvalidStyles() {
    if (this.invalid) {
      return css`
        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-track {
          background-color: var(--select-scrollBarTrackColor);
          opacity: 0.34;
          border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--select-scrollBarThumbColor);
          border-radius: 3px;
        }
        .mat-form-field {
          .mat-hint {
            color: var(--select-invalidColor) !important;
          }
          .mat-form-field-ripple,
          .mat-form-field-underline {
            background-color: var(--select-invalidColor) !important;
          }
          .mat-form-field-empty mat-label {
            color: var(--select-color) !important;
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--select-invalidColor) !important;
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--select-invalidColor) !important;
          }
        }
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
      ${this.getInvalidStyles()}
      .mat-form-field-label {
        color: var(--select-color);
      }
      .mat-form-field-label.mat-form-field-empty {
        color: var(--select-color);
      }
      .mat-form-field-appearance-legacy .mat-form-field-underline {
        background-color: var(--select-color);
        height: 1px;
      }
    `;
  }

  public hasAssistiveText() {
    if (this.assistiveText != undefined) {
      return true;
    }
    return false;
  }
}
