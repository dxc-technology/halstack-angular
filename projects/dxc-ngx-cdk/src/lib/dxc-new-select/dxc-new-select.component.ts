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
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewSelectHelper } from "./dxc-new-select.helper";
import { Option } from "./interfaces/option.interface";
import { OptionGroup } from "./interfaces/optionGroup.interface";
import { v4 as uuidv4 } from "uuid";
import { SelectService } from "./services/select.service";

interface SelectProperties {
  label: string;
  name: string;
  value: string | string[];
  placeholder: string;
  helperText: string;
  searchable: boolean;
  readOnly: boolean;
  multiple: boolean;
  optional: boolean;
  disabled: boolean;
  error: string;
  margin: Object | string;
  size: string;
  options: Option[] | OptionGroup[];
  tabIndex: number;
}

@Component({
  selector: "dxc-new-select",
  templateUrl: "./dxc-new-select.component.html",
  providers: [DxcNewSelectHelper, CssUtils, SelectService],
})
export class DxcNewSelectComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string | string[];

  @Input()
  helperText: string;

  @Input()
  get searchable(): boolean {
    return this._searchable;
  }
  set searchable(value: boolean) {
    this._searchable = coerceBooleanProperty(value);
  }
  private _searchable = false;

  @Input()
  get readOnly(): boolean {
    return this._readOnly;
  }
  set readOnly(value: boolean) {
    this._readOnly = coerceBooleanProperty(value);
  }
  private _readOnly = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = false;

  @Input()
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = coerceBooleanProperty(value);
  }
  private _optional = false;

  @Input()
  error: string = undefined;

  @Input()
  placeholder: string = "";

  @Input()
  margin: Object | string;

  @Input()
  tabIndex: number;

  @Input()
  size: string;

  @Input()
  options: Option[] | OptionGroup[];

  defaultInputs = new BehaviorSubject<SelectProperties>({
    label: "",
    name: "",
    value: null,
    placeholder: "",
    helperText: "",
    searchable: false,
    readOnly: false,
    multiple: false,
    optional: false,
    disabled: false,
    error: "",
    margin: "",
    size: "medium",
    options: [],
    tabIndex: 0,
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  id: string;
  isOpened: boolean = false;
  inputValue: string;
  isInputVisible: boolean = true;

  @ViewChild("containerRef", { static: false }) containerRef: ElementRef;
  @ViewChild("optionRef", { static: false }) optionRef: ElementRef;
  @ViewChild("inputRef", { static: false }) inputRef: ElementRef;

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.ref.nativeElement.contains(event.target)) {
      if (this.isOpened) {
        this.isOpened = false;
      }
    }
  }

  constructor(
    private helper: DxcNewSelectHelper,
    public service: SelectService,
    private ref: ElementRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.setDefaultValues();
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  ngOnInit(): void {
    this.id = this.id || uuidv4();
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  handleOptionMouseDown(event) {
    event.preventDefault();
  }

  handleOptionClick(option, event) {
    if (!this.disabled) {
      this.containerRef.nativeElement.focus();
      event.preventDefault();
      event.stopPropagation();
      this.containerRef.nativeElement.focus();
      if (this.multiple) {
        const arr: Option[] = this.service.selectedValues.getValue() || [];
        const index = arr.indexOf(option);
        if (index >= 0) {
          arr.splice(index, 1);
        } else {
          arr.push(option);
        }
        this.onChange.emit(arr);
        if (!(this.value || this.value === "")) {
          this.service.setSelectedValues(arr);
        }
        this.showInput();
        this.setInputValue("");
        this.isOpened = true;
      } else {
        this.service.setSelectedValues(option);
        this.onChange.emit(option.value);
        this.isOpened = false;
      }
      if (this.searchable && !this.multiple) {
        this.isInputVisible = false;
      }
    }
  }

  removeSelectedValues() {
    this.service.setSelectedValues([]);
    this.onChange.emit([]);
  }

  public isValueSelected = (value): boolean =>
    this.service.selectedValues.getValue() &&
    this.service.selectedValues.getValue().find((op) => op.value === value);

  setDefaultValues() {
    if (this.value) {
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
    if (this.instanceOfOption(this.options[0])) {
      const arrayOption = array as Option[];
      if (arrayOption?.length > 0) {
        selected = this.findOption(arrayOption, value);
      }
    } else {
      const arrayOption = array as OptionGroup[];
      if (arrayOption?.length > 0) {
        arrayOption.map((op) => {
          selected = this.findOption(op.options, value);
        });
      }
    }
  }

  private findOption(options: Option[], value: string) {
    options.find((op) => {
      if (op.value === value) {
        return op;
      }
    });
  }

  instanceOfOption(option: any): option is Option {
    return "value" in option;
  }

  handleSelectOpen() {
    if (!this.disabled) {
      this.searchable ? this.showInput() : this.isOpened = !this.isOpened;
      if (!this.multiple && this.isOpened) {
        if (this.service.getSizeSelectedValues() === 1) {
          // if (
          //   this.optionsRef &&
          //   this.optionsRef.nativeElement.children[this.focusedOption]
          // ) {
          //   this.optionsRef.nativeElement.children[
          //     this.focusedOption
          //   ].scrollIntoView({
          //     behavior: "smooth",
          //     block: "nearest",
          //     inline: "nearest",
          //   });
          // }
        }
      }
    }
  }

  isSelected(option): boolean {
    if (!this.multiple) {
      return this.service.selectedValues?.getValue()?.value === option.value
        ? true
        : false;
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const selected = this.service.selectedValues
          .getValue()
          .find((op) => op.value === option.value);
        return selected !== null && selected !== undefined;
      } else return false;
    }
  }

  handleOnChangeInput(value) {
    this.inputValue = value;
  }

  handleDefaultClearInput(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setInputValue("");
  }

  private setInputValue(value: string) {
    if (this.inputRef) {
      this.inputRef.nativeElement.value = value;
      this.inputValue = value;
    }
    this.isOpened = false;
  }

  private showInput() {
    this.isInputVisible = true;
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
      this.isOpened = !this.isOpened;
    });
  }
}
