import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ViewChild,
  HostListener,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { OnDestroy } from "@angular/core";
import { DxcTextInputComponent } from "../dxc-text-input/dxc-text-input.component";
import { DxcNumberInputHelper } from "./dxc-number-input.helper";

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
  selector: "dxc-number-input",
  templateUrl: "./dxc-number-input.component.html",
  providers: [DxcNumberInputHelper, CssUtils],
})
export class DxcNumberInputComponent implements OnInit, OnChanges, OnDestroy {
  @HostBinding("class") className;
  /**
   * Text to be placed above the number.
   */
  @Input() label: string = "";
  /**
   * Name attribute of the input element.
   */
  @Input() name: string = "";
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  @Input() value: string;
  /**
   * Helper text to be placed above the number.
   */
  @Input() helperText: string = "";
  /**
   * Text to be put as placeholder of the number.
   */
  @Input() placeholder: string = "";
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
  private _disabled = false;
  /**
   * Minimum value allowed by the number input. If the typed value by the user is
   * lower than min, the onBlur and onChange functions will be called with
   * the current value and an internal error informing that the current
   * value is not correct. If a valid state is reached, the error parameter
   * will be null in both events.
   */
  @Input()
  get min(): number {
    return this._min;
  }
  set min(value: number) {
    this._min = coerceNumberProperty(value);
  }
  private _min = null;
  /**
   * Maximum value allowed by the number input. If the typed value by the user
   * surpasses max, the onBlur and onChange functions will be called with
   * the current value and an internal error informing that the current
   * value is not correct. If a valid state is reached, the error parameter
   * will be null in both events.
   */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: number) {
    this._max = coerceNumberProperty(value);
  }
  private _max = null;
  /**
   * The step interval to use when using the up and down arrows to adjust the value.
   */
  @Input()
  get step(): number {
    return this._step;
  }
  set step(value: number) {
    this._step = coerceNumberProperty(value);
  }
  private _step = 1;
  /**
   * If true, the number will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required
   * and an error will be passed as a parameter to the OnBlur and onChange
   * functions when it has not been filled.
   */
  @Input()
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = coerceBooleanProperty(value);
  }
  private _optional = false;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the input component. If it is not defined, the error
   * messages will be managed internally, but never displayed on its own.
   */
  @Input() error: string = "";

  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  @Input() autocomplete: string = "off";

  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" = "medium";
  /**
   * Value of the tabindex attribute.
   */
  @Input() tabIndex: number = 0;

  private controlled: boolean;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
    step: 1,
    min: null,
    max: null,
    tabIndex: 0,
    size: "medium",
  });
  /**
   * This event will emit in case the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will be null.
   */
  @Output() onChange = new EventEmitter<{
    value: string;
    error: string | null;
  }>();
  /**
   * This event will emit in case the number loses the focus.
   * An object including the input value and the error (if the value
   * entered is not valid) will be passed to this function. If there is no error,
   * error will be null.
   */
  @Output() onBlur = new EventEmitter<{
    value: string;
    error: string | null;
  }>();
  @ViewChild("dxcInputRef", { static: false })
  dxcInputRef: DxcTextInputComponent;

  randomId: string;

  isFocused: boolean = false;

  @HostListener("window:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (this.isFocused) {
      if (event.key === "ArrowUp") {
        this.handleStepPlus();
      }

      if (event.key === "ArrowDown") {
        this.handleStepMinus();
      }
    }
  }

  validationError: string = undefined;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcNumberInputHelper
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.randomId = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;

    if (this.value === undefined) {
      this.value = "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }

    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewInit(): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.dxcInputRef.inputRef.nativeElement.attributes.type.value = "number";
      this.dxcInputRef.inputRef.nativeElement.min = this.min;
      this.dxcInputRef.inputRef.nativeElement.max = this.max;
      this.dxcInputRef.inputRef.nativeElement.step = this.step;
      this.dxcInputRef.isInputNumber = true;
    }
    this.cdRef.detectChanges();
    if (
      this.dxcInputRef &&
      this.dxcInputRef.stepButtonMinus &&
      this.dxcInputRef.stepButtonPlus
    ) {
      this.dxcInputRef.stepButtonMinus.nativeElement.addEventListener(
        "click",
        this.handleStepMinus.bind(this)
      );
      this.dxcInputRef.stepButtonPlus.nativeElement.addEventListener(
        "click",
        this.handleStepPlus.bind(this)
      );
      this.dxcInputRef.inputRef.nativeElement.addEventListener(
        "focus",
        this.isFocus.bind(this)
      );
      this.dxcInputRef.inputRef.nativeElement.addEventListener(
        "blur",
        this.isBlur.bind(this)
      );
    }
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  handleOnChange({ value, error }) {
    this.cdRef.detectChanges();
    this.onChange.emit({ value, error });
    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = value);
  }

  handleOnBlur({ value, error }) {
    this.validationError = this.validation();
    this.onBlur.emit({ value, error });
    if (!this.controlled) {
      this.value = value;
      this.cdRef.detectChanges();
    }
  }

  validation() {
    let err;
    const currentValue = coerceNumberProperty(this.value);
    if (this.value && this.min && currentValue < this.min) {
      err = `Value must be greater than or equal to ${this.min}.`;
    } else if (this.value && this.max && currentValue > this.max) {
      err = `Value must be less than or equal to ${this.max}.`;
    }
    return err;
  }

  handleStepMinus() {
    this.handleOnBlur({ value: this.value, error: this.validation() });
    let currentValue;
    if (this.value === null || this.value === undefined) {
      currentValue = 0;
    } else {
      currentValue = coerceNumberProperty(this.value);
    }
    let calculatedValue = this.calculateMinus(currentValue);
    this.handleOnChange({ value: calculatedValue.toString(), error: null });
    this.dxcInputRef.inputRef.nativeElement.focus();
  }

  handleStepPlus() {
    this.handleOnBlur({ value: this.value, error: this.validation() });
    let currentValue;
    if (this.value === null || this.value === undefined) {
      currentValue = 0;
    } else {
      currentValue = coerceNumberProperty(this.value);
    }
    let calculatedValue = this.calculatePlus(currentValue);
    this.handleOnChange({ value: calculatedValue.toString(), error: null });
    this.dxcInputRef.inputRef.nativeElement.focus();
  }

  calculatePlus(currentValue: number) {
    let calculated = parseInt(this.value);
    if (this.max && currentValue > this.max) {
      calculated = currentValue;
    } else if (this.min && (currentValue < this.min || this.value === "")) {
      calculated = this.min;
    } else if (
      this.max &&
      (currentValue === this.max ||
        (this.step && currentValue + this.step > this.max))
    ) {
      calculated = this.max;
    } else if (
      (this.step && this.max && currentValue + this.step <= this.max) ||
      (this.step && this.value !== "")
    ) {
      calculated = currentValue + this.step;
    } else if (this.step && this.value === "") {
      calculated = this.step;
    } else if (this.value === "") {
      calculated = 1;
    } else {
      calculated = currentValue + 1;
    }
    return calculated;
  }

  calculateMinus(currentValue: number) {
    let calculated = parseInt(this.value);
    if (this.min && currentValue < this.min && this.value !== "") {
      calculated = currentValue;
    } else if (this.max && currentValue > this.max) {
      calculated = this.max;
    } else if (
      this.min &&
      (currentValue === this.min ||
        this.value === "" ||
        (this.step && currentValue - this.step < this.min))
    ) {
      calculated = this.min;
    } else if (
      (this.step && this.min && currentValue - this.step >= this.min) ||
      (this.step && this.value !== "")
    ) {
      calculated = currentValue - this.step;
    } else if (this.step && this.value === "") {
      calculated = -this.step;
    } else if (this.value === "") {
      calculated = -1;
    } else {
      calculated = currentValue - 1;
    }
    return calculated;
  }

  isFocus() {
    this.isFocused = true;
  }

  isBlur() {
    this.isFocused = false;
  }
}
