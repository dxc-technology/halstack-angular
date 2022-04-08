import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  forwardRef,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Optional,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcTextInputService } from "./services/dxc-text-input.service";
import { OnDestroy } from "@angular/core";
import { DxcTextInputHelper } from "./dxc-text-input.helper";
import { v4 as uuidv4 } from "uuid";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import EmittedValue from "./emitted-value.type";
import { Space, Spacing, TextInputProperties } from "./dxc-text-input.types";

@Component({
  selector: "dxc-text-input",
  templateUrl: "./dxc-text-input.component.html",
  providers: [
    DxcTextInputService,
    DxcTextInputHelper,
    CssUtils,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DxcTextInputComponent),
      multi: true,
    },
  ],
})
export class DxcTextInputComponent
  implements OnInit, OnChanges, OnDestroy, ControlValueAccessor
{
  @HostBinding("class") className;
  @HostBinding("class.hasError") hasError = false;

  /**
   * Text to be placed above the input. This label will be used as the aria-label attribute of the list of suggestions.
   */
  @Input() label: string;
  /**
   * Name attribute of the input element.
   */
  @Input() name: string = "";
  /**
   * Value of the input. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  @Input() value: string;
  /**
   * Initial value of the input, only when it is uncontrolled.
   */
  @Input() defaultValue: string;
  /**
   * Helper text to be placed above the input.
   */
  @Input() helperText: string;
  /**
   * Text to be put as placeholder of the input.
   */
  @Input() placeholder: string = "";
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  @Input() autocomplete: string = "off";

  hasAction = () => this.onActionClick.observers.length;
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
   * If true, the input will be optional, showing '(Optional)'
   * next to the label. Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur and onChange events when it has
   * not been filled.
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
   * If true, the input will have an action to clear the entered value.
   */
  @Input() clearable: boolean = false;
  /**
   * If it is defined, the component will change its appearance, showing
   * the error below the input component. If it is not defined, the error
   * messages will be managed internally, but never displayed on its own.
   */
  @Input() error: string = "";
  /**
   * Regular expression that defines the valid format allowed by the input.
   * This will be checked when the input loses the focus. If the value entered
   * does not match the pattern, the onBlur event will emit with the value
   * entered and the error informing that the value does not match the pattern
   * as parameters. If the pattern is accomplished, the error parameter will be
   * null.
   */
  @Input() pattern: string;
  /**
   * Specifies the minimun length allowed by the input. This will be checked
   * both when the input element loses the focus and while typing within it. If
   * the string entered does not comply the minimum length, the onBlur and
   * onChange events will emit with the current value and an internal error
   * informing that the value length does not comply the specified range. If a
   * valid length is reached, the error parameter of both events will be null.
   */
  @Input() minLength: number;
  /**
   * Specifies the maximum length allowed by the input. This will be checked
   * both when the input element loses the focus and while typing within it. If
   * the string entered does not comply the maximum length, the onBlur and
   * onChange events will emit with the current value and an internal error
   * informing that the value length does not comply the specified range. If a
   * valid length is reached, the error parameter of both events will be null.
   */
  @Input() maxLength: number;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;
  /**
   * These are the options to be displayed as suggestions. It can be either an array or a function:
   *    - Array:    Array of options that will be filtered by the component.
   *    - Function: This function will be called when the user changes the value, we will send as a parameter the new value;
   *                apart from that this function should return one promise on which we should make 'then' to get the suggestions filtered.
   */
  @Input() suggestions: Array<string> | any;

  /**
   * Value of the tabindex attribute.
   */
  @Input() tabIndexValue: number = 0;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent').
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" = "medium";

  id: string;
  autoSuggestId: string;

  private controlled: boolean;

  defaultInputs = new BehaviorSubject<TextInputProperties>({
    placeholder: "",
    error: "",
    clearable: false,
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: null,
    suggestions: [],
    tabIndexValue: 0,
    size: "medium",
  });
  /**
   * This event will be emit when the user types within the input
   * element of the component. An object including the current value and
   * the error (if the value entered is not valid) will be passed to this
   * event. If there is no error, error will be null.
   */
  @Output()
  onChange = new EventEmitter<EmittedValue>();
  /**
   * This event will emit when the input element loses the focus.
   * An object including the input value and the error (if the value
   * entered is not valid) will be passed to this event. If there is no error,
   * error will be null.
   */
  @Output()
  onBlur = new EventEmitter<EmittedValue>();
  /**
   * This event will emit when the action is clicked.
   */
  @Output()
  onActionClick = new EventEmitter<string>();

  @ViewChild("inputRef", { static: true }) inputRef: ElementRef;
  @ViewChild("autoSuggestOptions", { static: false }) optionsRef: ElementRef;
  @ViewChild("stepButtonMinus", { static: false }) stepButtonMinus: ElementRef;
  @ViewChild("stepButtonPlus", { static: false }) stepButtonPlus: ElementRef;
  @ViewChild("actionButton", { static: false }) actionButton: ElementRef;

  autosuggestVisible: boolean = false;

  focusedOption: number;

  activedOption: number;

  filteredOptions: Array<string>;

  darkBackground: boolean = false;

  isDirty: boolean = false;

  options: Array<string> = [];

  loading = new BehaviorSubject<boolean>(false);

  fetchingError = new BehaviorSubject<boolean>(false);

  autosuggestType: string;

  validationError: string = "";

  isInputNumber: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private service: DxcTextInputService,
    private helper: DxcTextInputHelper,
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
          validationError: this.validationError,
        })}`;
      }, 0);
    });
  }

  onTouch = () => {};

  writeValue(value: any): void {
    if (value) {
      this.value = value || "";
    } else {
      this.value = "";
    }
  }
  registerOnChange(fn: any): void {
    this.handleOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.id = this.id || uuidv4();
    this.autoSuggestId = this.id + "-listBox";
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
      validationError: this.validationError,
    })}`;
    if (this.value === undefined) {
      this.defaultValue ? (this.value = this.defaultValue) : (this.value = "");
      this.controlled = false;
    } else {
      this.controlled = true;
    }
    this.service.visualFocused.subscribe((value) => {
      this.focusedOption = value;
      if (
        this.optionsRef &&
        this.optionsRef.nativeElement.children[this.focusedOption]
      ) {
        this.optionsRef.nativeElement.children[
          this.focusedOption
        ].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    });
    this.service.activeOption.subscribe((value) => {
      this.activedOption = value;
    });
    this.service.filteredOptions.subscribe((filteredArray) => {
      this.filteredOptions = filteredArray;
      if (
        this.suggestions &&
        (this.suggestions.length || this.autosuggestType === "async") &&
        this.filteredOptions?.length > 0 &&
        this.isDirty
      ) {
        this.autosuggestVisible = true;
      } else {
        this.autosuggestVisible = false;
      }
      this.cdRef.detectChanges();
    });
    if (this.suggestions && typeof this.suggestions === "function") {
      this.getAsyncSuggestions();
      this.autosuggestType = "async";
    } else if (this.suggestions && Array.isArray(this.suggestions)) {
      this.options = this.suggestions;
      this.autosuggestType = "array";
    }
  }

  ngAfterViewInit(): void {
    if (this.inputRef) {
      if (this.suggestions && this.suggestions.length) {
        this.optionsRef.nativeElement.ariaLabel = this.label;
      }
      this.inputRef.nativeElement.ariaDisabled = this.disabled;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hasError = this.error && !this.disabled ? true : false;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
      validationError: this.validationError,
    })}`;
  }

  handleOnChange(event) {
    if (this.value !== event && this.isDirty) {
      this.onChange.emit({ value: event, error: this.validateValue(event) });
    }
    if (!this.controlled) {
      this.value = event;
      if (this.autosuggestType === "async") {
        this.getAsyncSuggestions();
      }
    } else {
      setTimeout(() => {
        if (this.inputRef.nativeElement.value !== this.value) {
          this.inputRef.nativeElement.value = this.value;
          this.cdRef.detectChanges();
        }
        if (this.autosuggestType === "async") {
          this.getAsyncSuggestions();
        }
      }, 0);
    }
    this.cdRef.detectChanges();
    this.service.setSelectedIndex(-1);
  }

  handleDefaultClearAction() {
    if (!this.isDirty) {
      this.isDirty = true;
    }
    this.handleOnChange("");
    this.inputRef.nativeElement.focus();
    if (this.suggestions) {
      this.autosuggestVisible = false;
      this.cdRef.detectChanges();
    }
  }

  handleActionOnClick(event) {
    this.handleOnBlur();
    this.onActionClick.emit(this.value);
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
    if (
      this.suggestions &&
      (this.suggestions.length || this.autosuggestType === "async") &&
      this.filteredOptions?.length > 0
    ) {
      this.autosuggestVisible = true;
      this.cdRef.detectChanges();
    } else {
      this.autosuggestVisible = false;
      this.cdRef.detectChanges();
    }
  }

  focusInput() {
    this.inputRef.nativeElement.focus();
  }

  handleOnClick() {
    if (
      this.suggestions &&
      (this.suggestions.length || this.autosuggestType === "async") &&
      this.filteredOptions?.length > 0
    ) {
      this.autosuggestVisible = true;
      this.cdRef.detectChanges();
    } else {
      this.autosuggestVisible = false;
      this.cdRef.detectChanges();
    }
  }

  handleOnClose() {
    if (this.autosuggestVisible) {
      this.service.visualFocused.next(-1);
      this.autosuggestVisible = false;
      this.cdRef.detectChanges();
    }
  }

  handleOnClickOption(event) {
    this.onChange.emit({ value: event, error: this.validateValue(event) });
    this.value = event;
    this.handleOnClose();
    this.service.activeOption.next(-1);
  }

  handleEnterKey() {
    if (this.focusedOption >= 0) {
      this.handleOnChange(this.filteredOptions[this.focusedOption]);
    }
    this.handleOnClose();
  }

  handleMouseDown(event, index) {
    this.service.activeOption.next(index);
    event.preventDefault();
  }

  handleOnLeave() {
    this.service.activeOption.next(-1);
  }

  handleOnKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.service.onArrowDown();
        this.handleOnClick();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.service.onArrowUp();
        this.handleOnFocus();
        break;
      case "Enter":
        this.handleEnterKey();
        break;
      case "Escape":
        if (this.suggestions && this.suggestions.length) {
          event.preventDefault();
          this.handleDefaultClearAction();
          this.handleOnClose();
        }
        break;
    }
  }

  private patternMatch(pattern, value) {
    const patternToMatch = new RegExp(pattern);
    return patternToMatch.test(value);
  }

  private validateValue(value) {
    if (this.isRequired(value))
      return `This field is required. Please, enter a value.`;
    if (this.isLengthIncorrect(value))
      return `Min length ${this.minLength}, Max length ${this.maxLength}`;
    if (value && !this.patternMatch(this.pattern, value))
      return `Please use a valid pattern`;
    return null;
  }

  private handleValidationError() {
    const validationError = this.validateValue(this.value);
    this.validationError = validationError;
    return validationError;
  }

  private isRequired = (value) => value === "" && !this.optional;

  private isLengthIncorrect = (value) =>
    (value !== "" &&
      this.minLength &&
      value &&
      value.length < +this.minLength) ||
    (this.maxLength && value && value.length > +this.maxLength);

  getAsyncSuggestions() {
    this.loading.next(true);
    this.fetchingError.next(false);
    this.suggestions(this.value).subscribe(
      (suggestionsOptionsList) => {
        this.options = suggestionsOptionsList;
        this.autosuggestVisible = true;
        this.cdRef.markForCheck();
        this.loading.next(false);
      },
      (err) => {
        this.fetchingError.next(true);
        this.autosuggestVisible = false;
        this.loading.next(false);
        this.cdRef.markForCheck();
      }
    );
  }
}
