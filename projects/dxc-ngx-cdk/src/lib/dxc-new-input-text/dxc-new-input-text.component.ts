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
  ElementRef,
  Optional,
  forwardRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewInputTextService } from "./services/dxc-new-input-text.service";
import { OnDestroy } from "@angular/core";
import { DxcNewInputTextHelper } from "./dxc-new-input-text.helper";
import { v4 as uuidv4 } from "uuid";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "dxc-new-input-text",
  templateUrl: "./dxc-new-input-text.component.html",
  providers: [DxcNewInputTextService, DxcNewInputTextHelper, CssUtils,
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcNewInputTextComponent),
    multi: true,
  }]
})
export class DxcNewInputTextComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @HostBinding("class") className;
  @HostBinding("class.hasError") hasError = false;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  id: string;

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
  optional = false;

  @Input()
  clearable = false;

  @Input()
  error = undefined;

  @Input()
  placeholder = "";

  @Input()
  pattern = "";

  @Input()
  length = { min: undefined, max: undefined };

  @Input()
  margin: Object | string;

  @Input()
  suggestions: any;

  @Input()
  tabIndex: number;

  @Input()
  size: string;

  autoSuggestId: string;

  private controlled: boolean;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    clearable: false,
    optional: false,
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
    suggestions: [],
    tabIndex: 0,
    size: "medium",
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

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

  onTouch = () => { }

  constructor(
    private cdRef: ChangeDetectorRef,
    private service: DxcNewInputTextService,
    private helper: DxcNewInputTextHelper,
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
  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }  }
  registerOnChange(fn: any): void {
    this.handleOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled =  isDisabled
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
      this.value = "";
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
      this.onChange.emit(event);
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
    this.onChange.emit("");
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
    const validationError = this.validateOnBlur();
    this.validationError = validationError;
    this.hasError = this.validationError ? true : false;
    this.onBlur.emit({ value: this.value, error: validationError });
  }

  handleOnFocus() {
    if (!this.isDirty) {
      this.isDirty = true;
    }
    if (
      this.suggestions &&
      (this.suggestions.length || this.autosuggestType === "async")
    ) {
      this.autosuggestVisible = true;
      this.cdRef.detectChanges();
    }
  }

  focusInput(){
    this.inputRef.nativeElement.focus();
  }

  handleOnClick() {
    if (
      this.suggestions &&
      (this.suggestions.length || this.autosuggestType === "async")
    ) {
      this.autosuggestVisible = true;
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
    if (this.activedOption === this.focusedOption) {
      this.onChange.emit(event);
      this.value = event;
      this.handleOnClose();
    }
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

  handleOnHover(index) {
    this.service.visualFocused.next(index);
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

  validateLength(value) {
    return (this.length.min && value && value.length < +this.length.min) ||
      (this.length.max && value && value.length > +this.length.max)
      ? `Min length ${this.length.min}, Max length ${this.length.max}`
      : null;
  }

  validateOnBlur() {
    let err = this.validateLength(this.value);
    if (!err && this.value && !this.patternMatch(this.pattern, this.value)) {
      err = `Please use a valid pattern`;
    }
    return err;
  }

  patternMatch(pattern, value) {
    const patternToMatch = new RegExp(pattern);
    return patternToMatch.test(value);
  }

  getAsyncSuggestions() {
    this.loading.next(true);
    this.fetchingError.next(false);
    this.suggestions(this.value).subscribe(
      (suggestionsOptionsList) => {
        this.options = suggestionsOptionsList;
        this.cdRef.markForCheck();
        this.loading.next(false);
      },
      (err) => {
        this.fetchingError.next(true);
        this.loading.next(false);
        this.cdRef.markForCheck();
      }
    );
  }
}
