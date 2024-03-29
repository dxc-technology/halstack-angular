import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  forwardRef,
  Self,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcSelectHelper } from "./dxc-select.helper";
import { Option } from "./interfaces/option.interface";
import { OptionGroup } from "./interfaces/optionGroup.interface";
import { v4 as uuidv4 } from "uuid";
import { SelectService } from "./services/select.service";
import { VisualOptionFocus } from "./interfaces/visualFocus.interface";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import {
  SelectProperties,
  Space,
  Spacing,
  EmittedValue,
} from "./dxc-select.types";

@Component({
  selector: "dxc-select",
  templateUrl: "./dxc-select.component.html",
  providers: [
    DxcSelectHelper,
    CssUtils,
    SelectService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DxcSelectComponent),
      multi: true,
    },
  ],
})
export class DxcSelectComponent implements OnInit, ControlValueAccessor {
  @HostBinding("class") className;

  /**
   * Text to be placed above the select.
   */
  @Input() label: string;

  /**
   * Name attribute of the input element. This attribute will allow users
   * to find the component's value during the submit event. In this event,
   * the component's value will always be a regular string, for both single
   * and multiple selection modes, been in the first one a single option
   * value and in the multiple variant more than one option value,
   * separated by commas.
   */
  @Input() name: string;

  /**
   * Value of the select. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  @Input()
  value: string | string[];

  /**
   * Initial value of the select, only when it is uncontrolled.
   */
  @Input()
  defaultValue: string | string[];

  /**
   * Helper text to be placed above the select.
   */
  @Input()
  helperText: string;

  /**
   * If true, enables search functionality.
   */
  @Input()
  get searchable(): boolean {
    return this._searchable;
  }
  set searchable(value: boolean) {
    this._searchable = coerceBooleanProperty(value);
  }
  private _searchable = false;

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
   * If true, the select component will support multiple selected options.
   * In that case, value will be an array of strings with each selected option value.
   */
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = false;

  /**
   * If true, the select will be optional, showing (Optional) next to the label
   * and adding a default first option with an empty string as value,
   * been the placeholder (if defined) its label.
   * Otherwise, the field will be considered required and an error will be passed
   * as a parameter to the OnBlur and onChange functions if an option wasn't selected.
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
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the select component. If
   * the defined value is an empty string, it will reserve a space below the
   * component for a future error, but it would not change its look. In case of
   * being undefined or null, both the appearance and the space for the error
   * message would not be modified.
   */
  @Input()
  error: string = undefined;

  /**
   * Text to be put as placeholder of the select.
   */
  @Input()
  placeholder: string = "";

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
  tabIndexValue: number;

  /**
   * Size of the component.
   */
  @Input()
  size: "small" | "medium" | "large" | "fillParent";

  /**
   * An array of objects representing the selectable options.
   */
  @Input()
  options: Option[] | OptionGroup[];

  defaultInputs = new BehaviorSubject<SelectProperties>({
    label: "",
    name: "",
    value: null,
    defaultValue: null,
    placeholder: "",
    helperText: "",
    searchable: false,
    multiple: false,
    optional: false,
    disabled: false,
    error: undefined,
    margin: undefined,
    size: "medium",
    options: [],
    tabIndexValue: 0,
  });

  /**
   * This event will be emitted when the user selects an option. An object including the new value (or values)
   * and the error (if the value selected is not valid) will be passed to this function.
   */
  @Output()
  onChange = new EventEmitter<EmittedValue>();

  /**
   * This event will be emitted when the select loses the focus. An object including the value (or values)
   * and the error (if the value selected is not valid) will be passed to this function.
   */
  @Output()
  onBlur = new EventEmitter<EmittedValue>();

  id: string;
  optionsListId: string;
  selectLabelId: string;
  isOpened: boolean = false;
  inputValue: string;
  isInputVisible: boolean = true;
  controlled: boolean = false;
  focusedOption: VisualOptionFocus;
  optionalOption: Option;
  formValues: string | string[];
  activeDescendant: string;
  isDirty: boolean = false;
  isNotSelectable: boolean = false;

  @ViewChild("containerRef", { static: false }) containerRef: ElementRef;
  @ViewChild("optionsRef", { static: false }) optionsRef: ElementRef;
  @ViewChild("inputRef", { static: false }) inputRef: ElementRef;
  @ViewChildren("optionGroupRef") optionGroupRef: QueryList<ElementRef>;

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.ref.nativeElement.contains(event.target)) {
      if (this.isOpened) {
        this.isOpened = false;
        this.setInitialFocusOption();
      }
      this.setInputValue("");
    }
  }

  constructor(
    private helper: DxcSelectHelper,
    @Self() public service: SelectService,
    private ref: ElementRef
  ) {
    this.service.selectedValues?.subscribe((selectedValues) => {
      if (selectedValues) {
        this.formValues = this.multiple
          ? selectedValues.map((item) => item.value).toString()
          : selectedValues.value;
      }
    });
  }

  public onTouched: () => void = () => {};

  public onChangeRegister = (val) => {
    this.setInputValue(val);
  };

  writeValue(val: any): void {
    this.formValues = val || "";
  }
  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.optionalOption = { label: this.setPlaceholderOptional(), value: "" };
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.setDefaultValues();
    this.setInitialFocusOption();
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  ngOnInit(): void {
    this.optionalOption = { label: this.setPlaceholderOptional(), value: "" };
    if (this.optional && !this.multiple && !(this.value || this.value === "")) {
      this.service.setSelectedValues(this.optionalOption);
    }
    this.id = `select-${uuidv4()}`;
    this.selectLabelId = `label-${this.id}`;
    this.optionsListId = `${this.id}-listbox`;
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
    this.controlled = this.value || this.value === "" ? true : false;
    if (this.defaultValue || (this.defaultValue === "" && !this.controlled)) {
      this.value = this.defaultValue;
      this.setDefaultValues();
    }
    this.service.visualFocused.subscribe((value) => {
      this.focusedOption = value;
      this.setActiveDescendantAttr();
      if (this.focusedOption.option === -1) {
        this.scrollByIndex(this.optionsRef, 0);
      } else if (
        (value.group === undefined || value.group === null) &&
        !(this.focusedOption.option === -1)
      ) {
        if (
          this.optionsRef &&
          this.optionsRef.nativeElement.children[value.option]
        ) {
          this.scrollByIndex(this.optionsRef, value.option + 1);
        }
      } else {
        if (this.optionGroupRef) {
          const optionGroupElement =
            this.optionGroupRef?.toArray()[value.group];
          optionGroupElement &&
            this.scrollByIndex(optionGroupElement, value.option + 1);
        }
      }
    });
  }

  private setActiveDescendantAttr() {
    const indexOptionalLabel = this.optional ? -1 : 0;
    this.activeDescendant =
      this.focusedOption.option < indexOptionalLabel
        ? "false"
        : this.focusedOption.group !== undefined
        ? `option-${this.focusedOption.group}-${this.focusedOption.option}`
        : `option-${this.focusedOption.option}`;
  }

  handleOptionMouseDown(event) {
    event.preventDefault();
  }

  handleOptionClick(option, event) {
    if (!this.disabled) {
      this.focusContainer(event, true);
      if (this.multiple) {
        const arr: Option[] = this.service.getSelectedValues() || [];
        const index = arr.indexOf(option);
        if (index >= 0) {
          arr.splice(index, 1);
        } else {
          arr.push(option);
        }
        if (arr) {
          let op = { value: [], error: undefined };
          arr.map((el) => {
            op.value.push(el.value);
          });
          this.onChange.emit(op);
        } else {
          this.onChange.emit({ value: [], error: this.isRequired() });
        }
        this.service.setSelectedValues(arr);
        this.showInput();
        this.isOpened = true;
      } else {
        if (option) {
          this.onChange.emit({ value: option.value, error: undefined });
        } else {
          this.onChange.emit({ value: "", error: this.isRequired() });
        }
        if (!this.controlled) {
          this.service.setSelectedValues(option);
        }
        this.isOpened = false;
      }
      this.setInitialFocusOption();
      this.setInputValue("");
      if (this.searchable && !this.multiple) {
        this.isInputVisible = false;
      }
    }
  }

  handleOnFocusOut() {
    const options = this.service.getSelectedValues();
    if (this.multiple) {
      if (options) {
        let op = { value: [], error: undefined };
        options.map((el) => {
          op.value.push(el.value);
        });
        if (op.value.length === 0) {
          op.error = this.isRequired();
        }
        this.onBlur.emit(op);
      } else {
        this.onBlur.emit({ value: [], error: this.isRequired() });
      }
    } else {
      if (options) {
        // if (options.value === "") {
        //   this.service.setSelectedValues([]);
        // }
        this.onBlur.emit({ value: options.value, error: undefined });
      } else {
        this.onBlur.emit({ value: "", error: this.isRequired() });
      }
    }
  }

  focusContainer(event, isOptionClicked: boolean) {
    if (!this.disabled && this.searchable) {
      event.preventDefault();
      event.stopPropagation();
      this.isInputVisible = true;
      this.inputRef.nativeElement.focus();
      this.isOpened = !isOptionClicked ? true : false;
    } else if (!this.disabled && this.multiple) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  labelClick(event) {
    if (!this.disabled && !this.searchable) {
      event.preventDefault();
      event.stopPropagation();
      this.containerRef?.nativeElement?.focus();
    }
    if (!this.disabled && this.searchable) {
      event.preventDefault();
      event.stopPropagation();
      this.isInputVisible = true;
      setTimeout(() => {
        this.inputRef.nativeElement.focus();
      }, 0);
    }
  }

  removeSelectedValues(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.controlled) {
      this.service.setSelectedValues([]);
    }
    if (this.multiple) {
      this.onChange.emit({ value: [], error: this.isRequired() });
    } else {
      this.onChange.emit({ value: "", error: this.isRequired() });
    }
  }

  public isValueSelected = (value): boolean =>
    this.service.getSelectedValues() &&
    this.service.getSelectedValues().find((op) => op.value === value);

  public isFocused = (indexGroup, indexOption): boolean =>
    this.focusedOption.option === indexOption &&
    this.focusedOption.group === indexGroup;

  setDefaultValues() {
    if (this.value !== undefined && this.value !== null) {
      if (Array.isArray(this.value)) {
        const arr = [];
        this.value.map((value) => {
          const option = this.findOptionByValue(value);
          if (option !== undefined && option !== null) {
            arr.push(option);
          }
        });
        this.service.setSelectedValues(arr);
      } else {
        const option = this.findOptionByValue(this.value);
        this.service.setSelectedValues(option);
      }
    }
  }

  findOptionByValue(value: any) {
    let selected;
    const array = this.options;
    if (this.service.instanceOfOption(this.options[0])) {
      const arrayOption = array as Option[];
      if (arrayOption?.length > 0) {
        selected = this.findOption(arrayOption, value);
      }
    } else {
      const arrayOption = array as OptionGroup[];
      if (arrayOption?.length > 0) {
        arrayOption.map((op) => {
          const found = this.findOption(op.options, value);
          if (found !== undefined && found != null) {
            selected = found;
          }
        });
      }
    }
    return selected;
  }

  private findOption(options: Option[], value: string) {
    return options.find((op) => {
      if (op.value === value) {
        return op;
      }
    });
  }

  handleSelectOpen() {
    if (!this.disabled) {
      if (this.searchable) {
        this.showInput();
      } else if (!this.isNotSelectable) {
        this.isOpened = !this.isOpened;
      }
      this.isNotSelectable = false;
      this.isOpened && this.handleScrollSelected();
      this.setInitialFocusOption();
    }
  }

  private handleScrollSelected() {
    const array = this.options;
    if (array && array?.length > 0 && !this.multiple) {
      if (this.service?.getSelectedValues()?.value === "" && this.optional) {
        this.service.setVisualFocused({
          group: -1,
          option: -1,
        });
      } else if (this.service.instanceOfOption(array[0]) && this.optionsRef) {
        const arrayOption = array as Option[];
        if (this.service.getSelectedValues()) {
          this.setFocusSelectedOption(arrayOption);
        }
      } else if (
        !this.service.instanceOfOption(array[0]) &&
        this.optionGroupRef
      ) {
        if (this.service.getSelectedValues()) {
          const arrayOption = array as OptionGroup[];
          this.setFocusSelectedOptionGroup(arrayOption);
        }
      }
    }
  }

  private setFocusSelectedOption(arrayOption: Option[]) {
    const index = arrayOption.indexOf(this.service.getSelectedValues());
    this.service.setVisualFocused({
      group: -1,
      option: index,
    });
  }

  private setFocusSelectedOptionGroup(arrayOption: OptionGroup[]) {
    let indexOption, indexGroup;
    arrayOption.map((op, index) => {
      const found = this.findOption(
        op.options,
        this.service.getSelectedValues().value
      );
      if (found !== undefined && found != null) {
        indexOption = op.options.indexOf(found);
        indexGroup = index;
      }
    });
    if (indexGroup !== undefined && indexOption !== undefined) {
      this.service.setVisualFocused({
        group: indexGroup,
        option: indexOption,
      });
    } else {
      if (this.optionalOption === this.service.getSelectedValues()) {
        this.service.setVisualFocused({
          group: -1,
          option: -1,
        });
      }
    }
  }

  private scrollByIndex(element, index) {
    if (element !== undefined && index !== undefined) {
      element.nativeElement?.children[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }

  handleOnChangeInput(value) {
    this.inputValue = value;
  }

  handlePropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  handleClearInput(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setInputValue("");
  }

  private setInputValue(value: string) {
    if (this.inputRef) {
      this.inputRef.nativeElement.value = value;
      this.inputValue = value;
    }
  }

  private showInput() {
    this.isInputVisible = true;
    setTimeout(() => {
      this.inputRef?.nativeElement.focus();
      if (!this.multiple && this.isNotSelectable) {
        this.isOpened = !this.isOpened;
      } else {
        this.isOpened = true;
      }
      this.setInitialFocusOption();
    });
  }

  handleBlurInput() {
    this.isInputVisible = false;
  }

  private setPlaceholderOptional() {
    if (this.placeholder) {
      return this.placeholder;
    } else {
      if (!this.multiple) {
        return "Choose an option";
      } else {
        return "Choose options";
      }
    }
  }

  setPlaceholder() {
    if (this.service.getSelectedValues()?.label && !this.multiple) {
      return this.service.getSelectedValues()?.label;
    } else {
      if (this.placeholder) {
        return this.placeholder;
      } else {
        if (!this.multiple) {
          this.placeholder = "Choose an option";
          return this.placeholder;
        } else {
          this.placeholder = "Choose options";
          return this.placeholder;
        }
      }
    }
  }

  handleOnKeyDown(event) {
    if (!this.isOpened) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.isOpened = true;
          if (
            this.service.getSelectedValues() !== undefined &&
            this.service.getSelectedValues() !== null
          ) {
            this.setActualSelectedFocus();
            this.service.onArrowDown(this.optional, this.isDirty);
            this.isDirty = true;
          } else {
            this.isDirty = true;
            this.service.onArrowDown(this.optional, this.isDirty);
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          this.isOpened = true;
          if (
            this.service.getSelectedValues() !== undefined &&
            this.service.getSelectedValues() !== null
          ) {
            this.setActualSelectedFocus();
            this.service.onArrowUp(this.optional, this.isDirty);
            this.isDirty = true;
          } else {
            this.isDirty = true;
            this.service.onArrowUp(this.optional, this.isDirty);
          }
          break;
      }
    } else {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.service.onArrowDown(this.optional, this.isDirty);
          this.isDirty = true;
          break;
        case "ArrowUp":
          event.preventDefault();
          this.service.onArrowUp(this.optional, this.isDirty);
          this.isDirty = true;
          break;
        case "Enter":
          this.handleEnterKey(event);
          break;
        case "Tab":
          this.isOpened = false;
          break;
        case "Escape":
          event.preventDefault();
          this.isOpened = false;
          this.setInitialFocusOption();
          this.setInputValue("");
          this.inputRef?.nativeElement?.blur();
          break;
      }
    }
  }

  private setActualSelectedFocus() {
    if (!this.multiple) {
      const array = this.options;
      if (this.service.instanceOfOption(this.options[0])) {
        const arrayOption = array as Option[];
        if (this.service.getSelectedValues()) {
          this.setFocusSelectedOption(arrayOption);
        }
      } else {
        const arrayOption = array as OptionGroup[];
        if (this.service.getSelectedValues()) {
          this.setFocusSelectedOptionGroup(arrayOption);
        }
      }
    }
  }

  handleEnterKey(event) {
    if (this.focusedOption.option === -1 && this.optional) {
      this.handleOptionClick(this.optionalOption, event);
    } else if (this.focusedOption.option > -1) {
      let arrayOption, option;
      if (this.service.instanceOfOption(this.options[0])) {
        arrayOption = this.service.filteredOptions.getValue() as Option[];
        option = arrayOption[this.focusedOption.option];
      } else {
        arrayOption = this.service.filteredOptions.getValue() as OptionGroup[];
        option =
          arrayOption[this.focusedOption.group].options[
            this.focusedOption.option
          ];
      }
      this.handleOptionClick(option, event);
    }
  }

  setInitialFocusOption() {
    if (!this.isOpened) {
      this.isDirty = false;
      this.service.setVisualFocused({
        option: this.optional ? -2 : -1,
        group: this.optional ? -2 : -1,
      });
    }
  }

  hasOptional() {
    return (
      this.optional &&
      (this.inputValue?.length <= 0 ||
        this.inputValue === undefined ||
        this.inputValue === null)
    );
  }

  private isRequired = () =>
    !this.optional
      ? `This field is required. Please, enter a value.`
      : undefined;

  clickNotSelectable() {
    this.isNotSelectable = true;
  }

  setDisplayValueContainer() {
    return (
      this.service.getSizeSelectedValues() <= 0 &&
      this.multiple &&
      this.searchable
    );
  }
}
