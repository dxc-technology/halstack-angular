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
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewInputTextService } from "./services/dxc-new-input-text.service";
import { OnDestroy } from "@angular/core";
import { DxcNewInputTextHelper } from "./dxc-new-input-text.helper";

@Component({
  selector: "dxc-new-input-text",
  templateUrl: "./dxc-new-input-text.component.html",
  providers: [DxcNewInputTextService, DxcNewInputTextHelper, CssUtils],
})
export class DxcNewInputTextComponent implements OnInit, OnChanges, OnDestroy {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

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
  autocompleteOptions: Array<any> = [];

  random: string;
  autoSuggestId: string;

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
    autocompleteOptions: [],
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  @ViewChild("inputRef", { static: false }) inputRef: ElementRef;
  @ViewChild("autoSuggestOptions", { static: false }) optionsRef: ElementRef;

  size: string;

  tabIndex: number;

  autosuggestVisible: boolean = false;

  focusedOption: number;

  activedOption: number;

  filteredOptions: Array<string>;

  fetchingError: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private service: DxcNewInputTextService,
    private helper: DxcNewInputTextHelper
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.random = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;
    this.autoSuggestId = this.random + "-listBox";
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;

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
  }

  ngAfterViewInit(): void {
    if (this.inputRef) {
      console.log(this.inputRef);
      if (this.autocompleteOptions.length) {
        this.inputRef.nativeElement.attributes.role.value = "combobox";
        this.inputRef.nativeElement.ariaExpanded = this.autosuggestVisible;
        this.inputRef.nativeElement.ariaControls = this.autoSuggestId;
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
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  handleOnChange(event) {
    this.onChange.emit(event.target.value);
    this.controlled
      ? (event.target.value = this.value)
      : (this.value = event.target.value);
    this.cdRef.detectChanges();
    this.service.setSelectedIndex(-1);
  }

  handleDefaultClearAction() {
    this.onChange.emit("");
    this.handleInternalValue({ value: "", nativeValue: this.value });
    this.inputRef.nativeElement.focus();
  }

  handleActionOnClick(event) {
    this.onActionClick.emit(event.target.value);
  }

  handleOnBlur(event) {
    this.onBlur.emit(event.target.value);
    this.handleInternalValue({ value: event.target.value, nativeValue: null });
    if (!this.controlled) {
      this.value = event.target.value;
      this.cdRef.detectChanges();
    }
  }

  handleOnFocus() {
    if (this.autocompleteOptions.length) {
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
      this.handleInternalValue({ value: event, nativeValue: this.value });
      this.handleOnClose();
    }
    this.service.activeOption.next(-1);
  }

  handleEnterKey() {
    if (this.focusedOption >= 0) {
      this.onChange.emit(this.filteredOptions[this.focusedOption]);
      this.handleInternalValue({
        value: this.filteredOptions[this.focusedOption],
        nativeValue: this.value,
      });
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

  handleOnKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.service.onArrowDown();
        this.handleOnFocus();
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
        event.preventDefault();
        this.handleDefaultClearAction();
        this.handleOnClose();
        break;
    }
  }

  private handleInternalValue({ value, nativeValue }) {
    if (!this.controlled) {
      this.value = value;
      if (nativeValue) {
        this.inputRef.nativeElement.value = nativeValue;
      }
      this.cdRef.detectChanges();
    }
  }
}
