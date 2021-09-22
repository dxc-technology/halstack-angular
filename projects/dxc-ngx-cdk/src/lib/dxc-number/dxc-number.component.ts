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
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { OnDestroy } from "@angular/core";
import { DxcNewInputTextComponent } from "../dxc-new-input-text/dxc-new-input-text.component";
import { DxcNumberHelper } from "./dxc-number.helper";

@Component({
  selector: "dxc-number",
  templateUrl: "./dxc-number.component.html",
  providers: [DxcNumberHelper, CssUtils],
})
export class DxcNumberComponent implements OnInit, OnChanges, OnDestroy {
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
  strict = true;

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
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

  @ViewChild("dxcInputRef", { static: false })
  dxcInputRef: DxcNewInputTextComponent;

  size: string;

  randomId: string;

  tabIndex: number;

  validationError: string = undefined;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcNumberHelper
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
    }
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.controlled
        ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
        : (this.value = this.dxcInputRef.inputRef.nativeElement.value);
    }
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  handleOnChange(event) {
    this.onChange.emit(event);
    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = event);
    this.cdRef.detectChanges();
  }

  handleOnBlur(event) {
    this.validationError = this.validateOnBlur();
    this.onBlur.emit({ value: event.value, error: this.validationError });
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

  handleOnKeyDown(event) {
    switch (event.key) {
    }
  }

  handleStepMinus(event) {
    this.handleOnBlur({ value: this.value });
    const currentValue = coerceNumberProperty(this.value);

    if (this.min && currentValue < this.min && this.value !== "") {
      this.value = currentValue;
    } else if (this.max && currentValue > this.max) {
      this.value = this.max;
    } else if (
      this.min &&
      (currentValue === this.min ||
        this.value === "" ||
        (this.step && currentValue - this.step < this.min))
    ) {
      this.value = this.min;
    } else if (
      (this.step && this.min && currentValue - this.step >= this.min) ||
      (this.step && this.value !== "")
    ) {
      this.value = currentValue - this.step;
    } else if (this.step && this.value === "") {
      this.value = -this.step;
    } else if (this.value === "") {
      this.value = -1;
    } else {
      this.value = currentValue - 1;
    }

    this.handleOnChange(this.value);
  }

  handleStepPlus(event) {
    this.handleOnBlur({ value: this.value });
    const currentValue = coerceNumberProperty(this.value);

    if (this.max && currentValue > this.max) {
      this.value = currentValue;
    } else if (this.min && (currentValue < this.min || this.value === "")) {
      this.value = this.min;
    } else if (
      this.max &&
      (currentValue === this.max ||
        (this.step && currentValue + this.step > this.max))
    ) {
      this.value = this.max;
    } else if (
      (this.step && this.max && currentValue + this.step <= this.max) ||
      (this.step && this.value !== "")
    ) {
      this.value = currentValue + this.step;
    } else if (this.step && this.value === "") {
      this.value = this.step;
    } else if (this.value === "") {
      this.value = 1;
    } else {
      this.value = currentValue + 1;
    }

    this.handleOnChange(this.value);
  }
}
