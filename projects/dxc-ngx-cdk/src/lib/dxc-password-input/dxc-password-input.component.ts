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
import {
  EmittedValue,
  PasswordInputProperties,
  Space,
  Spacing,
} from "./dxc-passsword-input.types";
import { DxcPasswordInputHelper } from "./dxc-password-input.helper";

@Component({
  selector: "dxc-password-input",
  templateUrl: "./dxc-password-input.component.html",
  providers: [DxcPasswordInputHelper, CssUtils],
})
export class DxcPasswordInputComponent implements OnInit, OnChanges {
  @HostBinding("class") className;
  /**
   * Text to be placed above the password.
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
   * Initial value of the password input, only when it is uncontrolled.
   */
  @Input() defaultValue: string;
  /**
   * Helper text to be placed above the password.
   */
  @Input() helperText: string = "";
  /**
   * If true, the password input will have an action to clear the entered value.
   */
  @Input()
  get clearable(): boolean {
    return this._clearable;
  }
  set clearable(value: boolean) {
    this._clearable = coerceBooleanProperty(value);
  }
  private _clearable = false;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the password input component. If it is not defined, the
   * error messages will be managed internally, but never displayed on its own.
   */
  @Input() error: string = "";
  /**
   * Regular expression that defines the valid format allowed by the
   * password input. This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not match
   * the pattern, the onBlur and onChange functions will be called with the
   * current value and an internal error informing that this value does not
   * match the pattern. If the pattern is met, the error parameter of both
   * events will be null.
   */
  @Input() pattern: string;
  /**
   * Specifies the minimun length allowed by the password input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the minimum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will be null.
   */
  @Input() minLength: number;
  /**
   * Specifies the maximum length allowed by the password input.
   * This will be checked both when the input element loses the
   * focus and while typing within it. If the string entered does not
   * comply the maximum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value
   * length does not comply the specified range. If a valid length is
   * reached, the error parameter of both events will be null.
   */
  @Input() maxLength: number;
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  @Input() autocomplete: string = "off";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" = "medium";
  /**
   * Value of the tabindex attribute.
   */
  @Input() tabIndexValue: number = 0;

  defaultInputs = new BehaviorSubject<PasswordInputProperties>({
    error: "",
    helperText: "",
    value: undefined,
    label: "",
    margin: null,
    tabIndexValue: 0,
    size: "medium",
    clearable: false,
    name: null,
    defaultValue: null,
    autocomplete: "off",
    minLength: null,
    maxLength: null,
  });

  /**
   * This function will be called when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * function. If there is no error, error will be null.
   * */
  @Output() onChange = new EventEmitter<EmittedValue>();
  /**
   * This function will be called when the input element loses the focus.
   * An object including the input value and the error (if the value entered is
   * not valid) will be passed to this function. If there is no error, error will be null.
   */
  @Output() onBlur = new EventEmitter<EmittedValue>();

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
