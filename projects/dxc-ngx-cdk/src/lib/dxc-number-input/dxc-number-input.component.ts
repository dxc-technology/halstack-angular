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

@Component({
  selector: "dxc-number-input",
  templateUrl: "./dxc-number-input.component.html",
  providers: [DxcNumberInputHelper, CssUtils],
})
export class DxcNumberInputComponent implements OnInit, OnChanges, OnDestroy {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: any;

  @Input()
  helperText: string;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get min(): number {
    return this._min;
  }
  set min(value: number) {
    this._min = coerceNumberProperty(value);
  }
  private _min = null;

  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: number) {
    this._max = coerceNumberProperty(value);
  }
  private _max = null;

  @Input()
  get step(): number {
    return this._step;
  }
  set step(value: number) {
    this._step = coerceNumberProperty(value);
  }
  private _step = 1;

  @Input()
  optional = false;

  @Input()
  error = "";

  @Input()
  placeholder = "";

  @Input()
  margin: Object | string;

  @Input()
  tabIndex: number;

  @Input()
  size: string = "medium";

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
    size: "medium",
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

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

  handleOnChange(event) {
    this.cdRef.detectChanges();
    this.onChange.emit(event);
    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = event);
  }

  handleOnBlur(event) {
    this.validationError = this.validateOnBlur();
    this.onBlur.emit({ value: event.value, error: this.validationError });
    if (!this.controlled) {
      this.value = event.value;
      this.cdRef.detectChanges();
    }
  }

  validateOnBlur() {
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
    this.handleOnBlur({ value: this.value });
    let currentValue;
    if (this.value === null || this.value === undefined) {
      currentValue = 0;
    } else {
      currentValue = coerceNumberProperty(this.value);
    }
    let calculatedValue = this.calculateMinus(currentValue);
    this.handleOnChange({value: calculatedValue, error: null});
    this.dxcInputRef.inputRef.nativeElement.focus();
  }

  handleStepPlus() {
    this.handleOnBlur({ value: this.value });
    let currentValue;
    if (this.value === null || this.value === undefined) {
      currentValue = 0;
    } else {
      currentValue = coerceNumberProperty(this.value);
    }
    let calculatedValue = this.calculatePlus(currentValue);
    this.handleOnChange({value: calculatedValue, error: null});
    this.dxcInputRef.inputRef.nativeElement.focus();
  }

  calculatePlus(currentValue: number) {
    let calculated = this.value;
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
    let calculated = this.value;
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
