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
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DxcTextInputComponent } from "../dxc-text-input/dxc-text-input.component";
import { CssUtils } from "../utils";
import { DxcPasswordInputHelper } from "./dxc-password-input.helper";

@Component({
  selector: "dxc-password-input",
  templateUrl: "./dxc-password-input.component.html",
  providers: [DxcPasswordInputHelper, CssUtils],
})
export class DxcPasswordInputComponent implements OnInit, OnChanges {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  defaultValue: string;

  @Input()
  helperText: string;

  @Input()
  get clearable(): boolean {
    return this._clearable;
  }
  set clearable(value: boolean) {
    this._clearable = coerceBooleanProperty(value);
  }
  private _clearable = false;

  @Input()
  error = "";

  @Input()
  pattern = "";

  @Input()
  margin: Object | string;

  @Input()
  minLength: number;

  @Input()
  maxLength: number;

  @Input()
  tabIndexValue: number;

  @Input()
  size: string = "medium";

  @Input()
  autocomplete: string = "off";

  defaultInputs = new BehaviorSubject<any>({
    error: "",
    helperText: "",
    value: undefined,
    label: "",
    margin: "",
    tabIndexValue: 0,
    size: "medium",
    clearable: false,
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

  @ViewChild("dxcInput", { static: false })
  dxcInputRef: DxcTextInputComponent;

  hidden: boolean = true;

  type: string;

  private controlled: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcPasswordInputHelper
  ) {}

  ngOnInit(): void {
    this.type = "password";

    if (this.value === undefined) {
      this.defaultValue ? (this.value = this.defaultValue) : (this.value = "");
      this.controlled = false;
    } else {
      this.controlled = true;
    }

    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewInit() {
    this.dxcInputRef.inputRef.nativeElement.attributes.type.value = this.type;
    this.dxcInputRef.actionButton.nativeElement.ariaExpanded = !this.hidden;
    this.dxcInputRef.actionButton.nativeElement.ariaLabel = this.hidden
      ? "Show"
      : "Hide";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dxcInputRef && this.dxcInputRef.inputRef) {
      this.controlled
        ? (this.dxcInputRef.inputRef.nativeElement.value = this.value)
        : (this.value = this.dxcInputRef.inputRef.nativeElement.value);
    }

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
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
    this.onBlur.emit({ value: value, error: error });
    if (!this.controlled) {
      this.value = value;
      this.cdRef.detectChanges();
    }
  }

  handleMaskPassword() {
    this.hidden ? (this.type = "text") : (this.type = "password");
    this.hidden = !this.hidden;
    this.dxcInputRef.inputRef.nativeElement.attributes.type.value = this.type;
    this.dxcInputRef.actionButton.nativeElement.ariaExpanded = !this.hidden;
    this.dxcInputRef.actionButton.nativeElement.ariaLabel = this.hidden
      ? "Show"
      : "Hide";
  }
}
