import { coerceBooleanProperty } from "@angular/cdk/coercion";
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

@Component({
  selector: "dxc-input-number",
  templateUrl: "./dxc-input-number.component.html",
  providers: [CssUtils],
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

  hasAction = () => this.onActionClick.observers.length;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  minValue = "";

  @Input()
  maxValue = "";

  @Input()
  step = "1";

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
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  @ViewChild("dxcInputRef", { static: false })
  dxcInputRef: DxcNewInputTextComponent;

  size: string;

  randomId: string;

  tabIndex: number;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.randomId = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;

    if (this.value === undefined) {
      this.value = "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.dxcInputRef.inputRef.nativeElement.attributes.type.value = "number";
      this.dxcInputRef.inputRef.nativeElement.min = this.minValue;
      this.dxcInputRef.inputRef.nativeElement.max = this.maxValue;
      this.dxcInputRef.inputRef.nativeElement.step = this.step;
    }

    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.controlled
        ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
        : (this.value = this.dxcInputRef.inputRef.nativeElement.value);
    }
  }

  handleOnChange(event) {
    this.onChange.emit(event);
    this.controlled
      ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
      : (this.value = this.dxcInputRef.inputRef.nativeElement.value);
    this.cdRef.detectChanges();
  }

  // handleDefaultClearAction() {
  //   this.onChange.emit("");
  //   this.handleInternalValue({ value: "", nativeValue: this.value });
  // }

  // handleActionOnClick(event) {
  //   this.onActionClick.emit(event.target.value);
  // }

  handleOnBlur(event) {
    this.onBlur.emit(event);
  }

  handleOnKeyDown(event) {
    switch (
      event.key
      // case "ArrowDown":
      //   event.preventDefault();
      //   this.service.onArrowDown();
      //   this.handleOnFocus();
      //   break;
      // case "ArrowUp":
      //   event.preventDefault();
      //   this.service.onArrowUp();
      //   this.handleOnFocus();
      //   break;
      // case "Enter":
      //   this.handleEnterKey();
      //   break;
      // case "Escape":
      //   event.preventDefault();
      //   this.handleDefaultClearAction();
      //   this.handleOnClose();
      //   break;
    ) {
    }
  }

  private handleInternalValue({ value, nativeValue }) {
    if (!this.controlled) {
      this.value = value;
      if (nativeValue) {
        this.dxcInputRef["inputRef"].nativeElement.value = nativeValue;
      }
      this.cdRef.detectChanges();
    }
  }
}
