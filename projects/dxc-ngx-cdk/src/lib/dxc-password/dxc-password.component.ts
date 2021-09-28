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
import { DxcNewInputTextComponent } from "../dxc-new-input-text/dxc-new-input-text.component";
import { CssUtils } from "../utils";
import { DxcPasswordHelper } from "./dxc-password.helper";

@Component({
  selector: "dxc-password",
  templateUrl: "./dxc-password.component.html",
  providers: [DxcPasswordHelper, CssUtils],
})
export class DxcPasswordComponent implements OnInit, OnChanges {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

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
  length = { min: undefined, max: undefined };

  @Input()
  tabIndex: number;

  @Input()
  size: string = "medium";

  defaultInputs = new BehaviorSubject<any>({
    error: "",
    helperText: "",
    value: undefined,
    label: "",
    margin: "",
    tabIndex: 0,
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
  dxcInputRef: DxcNewInputTextComponent;

  hidden: boolean = true;

  type: string;

  private controlled: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcPasswordHelper
  ) {}

  ngOnInit(): void {
    this.type = "password";

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

  handleOnChange(event) {
    if (this.value !== event) {
      this.onChange.emit(event);
    }
    if (!this.controlled) {
      this.value = event;
    } else {
      setTimeout(() => {
        if (this.dxcInputRef.inputRef.nativeElement.value !== this.value) {
          this.dxcInputRef.inputRef.nativeElement.value = this.value;
          this.cdRef.detectChanges();
        }
      }, 0);
    }
    this.cdRef.detectChanges();
  }

  handleOnBlur(event) {
    this.onBlur.emit({ value: event.value, error: event.error });
    if (!this.controlled) {
      this.value = event.value;
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

  private handleInternalValue({ value, nativeValue }) {
    if (!this.controlled) {
      this.value = value;
      if (nativeValue) {
        this.dxcInputRef.inputRef.nativeElement.value = nativeValue;
      }
      this.cdRef.detectChanges();
    }
  }
}
