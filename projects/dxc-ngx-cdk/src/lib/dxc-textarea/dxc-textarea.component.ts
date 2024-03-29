import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BackgroundProviderService } from "../../public-api";
import { CssUtils } from "../utils";
import { DxcTextareaHelper } from "./dxc-textarea.helper";
import { v4 as uuidv4 } from "uuid";
import { Space, Spacing, TextareaProperties } from "./dxc-textarea.types";
import EmittedValue from "../dxc-text-input/emitted-value.type";

@Component({
  selector: "dxc-textarea",
  templateUrl: "./dxc-textarea.component.html",
  providers: [DxcTextareaHelper, CssUtils],
})
export class DxcTextareaComponent implements OnInit {
  @HostBinding("class") className;
  @HostBinding("class.hasError") hasError = false;
  /**
   * Text to be placed above the textarea.
   */
  @Input()
  label: string = "";
  /**
   * Name attribute of the textarea element.
   */
  @Input()
  name: string = "";
  /**
   * Value of the textarea. If undefined, the component will be uncontrolled and the value will be managed internally.
   */
  @Input()
  value: string;
  /**
   * Default value given to the textarea when is uncontrolled and also maintains the uncontrolled behaviour.
   */
  @Input()
  defaultValue: string;
  /**
   * Helper text to be placed above the textarea.
   */
  @Input()
  helperText: string = "";
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
   * If true, the textarea will be optional, showing (Optional) next to the label.
   * Otherwise, the field will be considered required and an error will be passed as a parameter to the OnBlur and onChange functions when it has not been filled.
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
   * Number of rows of the textarea.
   */
  @Input()
  get rows(): number {
    return this._rows;
  }
  set rows(value: number) {
    this._rows = coerceNumberProperty(value);
  }
  private _rows = 4;
  /**
   * Defines the textarea's ability to resize vertically. It can be:
      'auto': The textarea grows or shrinks automatically in order to fit the content.
      'manual': The height of the textarea is enabled to be manually modified.
      'none': The textarea has a fixed height and can't be modified.
   */
  @Input()
  verticalGrow: "auto" | "manual" | "none" = "auto";
  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the textarea. If the defined
   * value is an empty string, it will reserve a space below the component for a
   * future error, but it would not change its look. In case of being undefined
   * or null, both the appearance and the space for the error message would not
   * be modified.
   */
  @Input()
  error = undefined;
  /**
   * Text to be put as placeholder of the textarea.
   */
  @Input()
  placeholder = "";
  /**
   * Regular expression that defines the valid format allowed by the textarea.
   * This will be checked when the textarea loses the focus.
   * If the value entered does not match the pattern, the onBlur function will be called with the value
   * entered and the error informing that the value does not match the pattern as parameters. If the pattern is accomplished,
   * the error parameter will be null.
   */
  @Input()
  pattern = "";
  /**
   * Specifies the minimun length allowed by the textarea.
   * This will be checked both when the input element loses the focus and while typing within it.
   * If the string entered does not comply the minimum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value length does not comply the specified range.
   * If a valid length is reached, the error parameter of both events will be null.
   */
  @Input()
  minLength: number;
  /**
   * Specifies the maximum length allowed by the textarea.
   * This will be checked both when the input element loses the focus and while typing within it.
   * If the string entered does not comply the maximum length, the onBlur and onChange functions will be called
   * with the current value and an internal error informing that the value length does not comply the specified range.
   * If a valid length is reached, the error parameter of both events will be null.
   */
  @Input()
  maxLength: number;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input()
  margin: Space | Spacing;
  /**
   * Value of the tabindex attribute.
   */
  @Input()
  tabIndexValue: number = 0;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  @Input()
  size: "small" | "medium" | "large" | "fillParent" = "medium";
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out
   * the textarea value. Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  @Input()
  autocomplete: string = "off";
  private controlled: boolean;
  defaultInputs = new BehaviorSubject<TextareaProperties>({
    placeholder: "",
    error: undefined,
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: undefined,
    tabIndexValue: 0,
    size: "medium",
    rows: 4,
    verticalGrow: "auto",
  });
  /**
   * This event will emit when the user types within the textarea. An object including the new value and the error will be passed to this function.
   * An example of this object is: { value: value, error: error }. If there is no error, error will be null.
   */
  @Output()
  onChange = new EventEmitter<EmittedValue>();
  /**
   * This event will emit when the textarea loses the focus. An object including the textarea value and the error will be passed to this function.
   * An example of this object is: { value: value, error: error }. If there is no error, error will be null.
   */
  @Output()
  onBlur = new EventEmitter<EmittedValue>();
  @ViewChild("textareaRef", { static: true }) textareaRef: ElementRef;
  darkBackground: boolean = false;
  isDirty: boolean = false;
  validationError: string = "";
  textareaId = `textarea-${uuidv4()}`;
  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcTextareaHelper,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.bgProviderService.$changeColor.subscribe((value) => {
      setTimeout(() => {
        if (value === "dark") {
          this.darkBackground = true;
        } else if (value === "light") {
          this.darkBackground = false;
        }
        this.className = `${this.helper.getDynamicStyle({
          ...this.defaultInputs.getValue(),
          darkBackground: this.darkBackground,
        })}`;
      }, 0);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkHeight();
    this.hasError = this.error && !this.disabled ? true : false;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
    })}`;
  }
  ngOnInit(): void {
    if (this.value === undefined) {
      this.value = this.defaultValue ?? "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
    })}`;
  }
  ngAfterViewInit(): void {
    if (this.textareaRef) {
      this.textareaRef.nativeElement.ariaDisabled = this.disabled;
    }
    this.checkHeight();
  }
  handleOnChange(event) {
    if (this.value !== event && this.isDirty) {
      this.onChange.emit({ value: event, error: this.validateValue(event) });
    }
    if (!this.controlled) {
      this.value = event;
    } else {
      setTimeout(() => {
        if (this.textareaRef.nativeElement.value !== this.value) {
          this.textareaRef.nativeElement.value = this.value;
          this.cdRef.detectChanges();
        }
      }, 0);
    }
    this.cdRef.detectChanges();
  }
  handleOnBlur() {
    this.onBlur.emit({
      value: this.value,
      error: this.handleValidationError(),
    });
  }
  handleOnFocus() {
    if (!this.isDirty) {
      this.isDirty = true;
    }
  }
  private validateValue(value) {
    if (this.isRequired(value))
      return `This field is required. Please, enter a value.`;
    if (this.isLengthIncorrect(value))
      return `Min length ${this.minLength}, Max length ${this.maxLength}`;
    if (value && !this.patternMatch(this.pattern, value))
      return `Please use a valid pattern`;
    return undefined;
  }
  private handleValidationError() {
    const validationError = this.validateValue(this.value);
    this.validationError = validationError;
    return validationError;
  }
  private patternMatch(pattern, value) {
    const patternToMatch = new RegExp(pattern);
    return patternToMatch.test(value);
  }
  private isRequired = (value) => value === "" && !this.optional;
  private isLengthIncorrect = (value) =>
    (value !== "" &&
      this.minLength &&
      value &&
      value.length < +this.minLength) ||
    (this.maxLength && value && value.length > +this.maxLength);
  private checkHeight() {
    if (this.textareaRef) {
      if (this.verticalGrow === "auto") {
        const textareaLineHeight = parseInt(
          window.getComputedStyle(this.textareaRef.nativeElement)["line-height"]
        );
        const textareaPaddingTopBottom =
          parseInt(
            window.getComputedStyle(this.textareaRef.nativeElement)[
              "padding-top"
            ]
          ) * 2;
        this.textareaRef.nativeElement.style.height = `${
          textareaLineHeight * this.rows
        }px`;
        const newHeight =
          this.textareaRef.nativeElement.scrollHeight -
          textareaPaddingTopBottom;
        this.textareaRef.nativeElement.style.height = `${newHeight}px`;
      }
    }
  }
}
