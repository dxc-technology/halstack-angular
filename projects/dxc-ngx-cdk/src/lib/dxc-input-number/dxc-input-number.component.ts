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
import { DxcNewInputNumberHelper } from "./dxc-input-number.helper";

@Component({
  selector: "dxc-input-number",
  templateUrl: "./dxc-input-number.component.html",
  providers: [DxcNewInputNumberHelper, CssUtils],
})
export class DxcInputNumberComponent implements OnInit, OnChanges, OnDestroy {
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
  get minValue(): number {
    return this._minValue;
  }
  set minValue(value: number) {
    this._minValue = coerceNumberProperty(value);
  }
  private _minValue = null;

  @Input()
  get maxValue(): number {
    return this._maxValue;
  }
  set maxValue(value: number) {
    this._maxValue = coerceNumberProperty(value);
  }
  private _maxValue = null;

  @Input()
  get step(): number {
    return this._step;
  }
  set step(value: number) {
    this._step = coerceNumberProperty(value);
  }
  private _step = 1;

  @Input()
  prefix = "";

  @Input()
  suffix = "";

  @Input()
  optional = false;

  @Input()
  clearable = false;

  @Input()
  error = "";

  @Input()
  placeholder = "";

  @Input()
  margin: Object | string;

  @Input()
  strict = true;

  @Input()
  pattern = "";

  @Input()
  length = { min: undefined, max: undefined };

  private controlled: boolean;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    clearable: false,
    optional: false,
    suffix: "",
    prefix: "",
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
    step: 1,
    minValue: null,
    maxValue: null,
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

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcNewInputNumberHelper
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
      this.dxcInputRef.inputRef.nativeElement.min = this.minValue;
      this.dxcInputRef.inputRef.nativeElement.max = this.maxValue;
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
    this.onChange.emit({ value: event.value });
    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = this.dxcInputRef.inputRef.nativeElement.value);
    this.cdRef.detectChanges();
  }

  handleOnBlur(event) {
    this.onBlur.emit({ value: event.value });
  }

  handleOnKeyDown(event) {
    switch (event.key) {
    }
  }

  handleStepMinus(event) {
    const currentValue = coerceNumberProperty(this.value);
    if (
      currentValue > this.minValue &&
      currentValue - this.step <= this.minValue &&
      currentValue < this.maxValue
    ) {
      this.value = this.minValue;
    } else if (
      currentValue > this.minValue &&
      currentValue - this.step > this.minValue &&
      currentValue <= this.maxValue
    ) {
      this.value = currentValue - this.step;
    } else if (currentValue > this.maxValue) {
      this.value = this.maxValue;
    }
    this.handleOnChange({ value: this.value });
  }

  handleStepPlus(event) {
    const currentValue = coerceNumberProperty(this.value);
    if (currentValue < this.minValue) {
      this.value = this.minValue;
    } else if (
      currentValue >= this.minValue &&
      currentValue <= this.maxValue &&
      currentValue + this.step <= this.maxValue
    ) {
      this.value = currentValue + this.step;
    } else if (
      currentValue > this.minValue &&
      currentValue <= this.maxValue &&
      currentValue + this.step > this.maxValue
    ) {
      this.value = this.maxValue;
    }
    this.handleOnChange({ value: this.value });
  }
}
