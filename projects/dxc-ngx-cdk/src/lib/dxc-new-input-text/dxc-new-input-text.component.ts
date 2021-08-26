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
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewInputTextService } from "./services/dxc-new-input-text.service";
import { OnDestroy } from "@angular/core";
import { DxcNewInputTextHelper } from "./dxc-new-input-text.helper";
import { v4 as uuidv4 } from "uuid";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

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
  error = "";

  @Input()
  placeholder = "";

  @Input()
  pattern = "";

  @Input()
  length = { min: undefined, max: undefined };

  @Input()
  margin: Object | string;

  @Input()
  autocompleteOptions: Array<any> = [];

  @Input()
  strict: boolean = true;

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
    autocompleteOptions: [],
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  @ViewChild("inputRef", { static: true }) inputRef: ElementRef;
  @ViewChild("autoSuggestOptions", { static: false }) optionsRef: ElementRef;

  size: string;

  tabIndex: number;

  autosuggestVisible: boolean = false;

  focusedOption: number;

  activedOption: number;

  filteredOptions: Array<string>;

  fetchingError: boolean = false;

  darkBackground: boolean = false;

  isDirty: boolean = false;

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
        })}`;
      }, 0);
    });
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.id = this.id || uuidv4();
    this.autoSuggestId = this.id + "-listBox";
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
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
  }

  ngAfterViewInit(): void {
    if (this.inputRef) {
      if (this.autocompleteOptions.length) {
        this.inputRef.nativeElement.attributes.role.value = "combobox";
        this.inputRef.nativeElement.ariaExpanded = this.autosuggestVisible;
        this.inputRef.nativeElement.ariaControls = this.autoSuggestId;
      }
      this.inputRef.nativeElement.ariaDisabled = this.disabled;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.strict && changes.value && this.isDirty && this.validateLength();
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

  handleOnChange(event) {
    this.onChange.emit(event);
    if (!this.controlled) {
      this.value = event;
    }
    if (this.controlled) {
      setTimeout(() => {
        if (this.inputRef.nativeElement.value !== this.value) {
          this.inputRef.nativeElement.value = this.value;
          this.cdRef.detectChanges();
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
  }

  handleActionOnClick(event) {
    this.onActionClick.emit(event.target.value);
  }

  handleOnBlur(event) {
    this.onBlur.emit(event.target.value);
    this.strict && this.validateOnBlur();
  }

  handleOnFocus() {
    if(!this.isDirty) {
      this.isDirty = true;
    }
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
      this.value = event;
      this.handleOnClose();
    }
    this.service.activeOption.next(-1);
  }

  handleEnterKey() {
    if (this.focusedOption >= 0) {
      this.onChange.emit(this.filteredOptions[this.focusedOption]);
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
        if (this.autocompleteOptions.length) {
          event.preventDefault();
          this.handleDefaultClearAction();
          this.handleOnClose();
        }
        break;
    }
  }

  validateLength() {
    if (this.length.min && this.value && this.value.length < +this.length.min) {
      this.onError.emit(
        `Please lengthen this text to ${this.length.min} characters or more`
      );
    } else if (
      this.length.max &&
      this.value &&
      this.value.length > +this.length.max
    ) {
      this.onError.emit(
        `Please shorthen this text to ${this.length.max} characters or less`
      );
    } else {
      this.onError.emit("");
    }
  }

  validateOnBlur() {
    if (this.length.min && this.value && this.value.length < +this.length.min) {
      this.onError.emit(
        `Please lengthen this text to ${this.length.min} characters or more`
      );
    } else if (
      this.length.max &&
      this.value &&
      this.value.length > +this.length.max
    ) {
      this.onError.emit(
        `Please shorthen this text to ${this.length.max} characters or less`
      );
    } else if (this.inputRef.nativeElement.validity.patternMismatch) {
      this.onError.emit(`Please use a valid pattern`);
    }
    else {
      this.onError.emit("");
    }
  }
}
