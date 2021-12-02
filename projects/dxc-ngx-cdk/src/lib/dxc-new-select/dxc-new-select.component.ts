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
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewSelectHelper } from "./dxc-new-select.helper";
import { Option } from "./interfaces/option.interface";
import { OptionGroup } from "./interfaces/optionGroup.interface";
import { v4 as uuidv4 } from "uuid";
import { SelectService } from "./services/select.service";
import { VisualOptionFocus } from "./interfaces/visualFocus.interface";

interface SelectProperties {
  label: string;
  name: string;
  value: string | string[];
  placeholder: string;
  helperText: string;
  searchable: boolean;
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
  controlled: boolean = false;
  focusedOption: VisualOptionFocus;

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
    this.controlled = this.value || this.value === "" ? true : false;
    this.service.visualFocused.subscribe((value) => {
      this.focusedOption = value;
      if (value.group === undefined || value.group === null) {
        if (
          this.optionsRef &&
          this.optionsRef.nativeElement.children[value.option]
        ) {
          this.scrollByIndex(this.optionsRef, value.option);
        }
      } else {
        if(this.optionGroupRef){
          const optionGroupElement = this.optionGroupRef?.toArray()[value.group];
          optionGroupElement && this.scrollByIndex(optionGroupElement, value.option + 1);
        }
      }
    });
  }

  handleOptionMouseDown(event) {
    event.preventDefault();
  }

  handleOptionClick(option, event) {
    if (!this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      this.containerRef.nativeElement.focus();
      if (this.multiple) {
        const arr: Option[] = this.service.getSelectedValues() || [];
        const index = arr.indexOf(option);
        if (index >= 0) {
          arr.splice(index, 1);
        } else {
          arr.push(option);
        }
        this.onChange.emit(arr);
        if (!this.controlled) {
          this.service.setSelectedValues(arr);
        }
        this.showInput();
        this.isOpened = true;
      } else {
        this.onChange.emit(option.value);
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

  removeSelectedValues(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.controlled) {
      this.service.setSelectedValues([]);
    }
    this.onChange.emit([]);
  }

  public isValueSelected = (value): boolean =>
    this.service.getSelectedValues() &&
    this.service.getSelectedValues().find((op) => op.value === value);

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
      this.searchable ? this.showInput() : (this.isOpened = !this.isOpened);
      this.isOpened && this.handleScrollSelected();
      this.setInitialFocusOption();
    }
  }

  private handleScrollSelected() {
    const array = this.options;
    if (array && array?.length > 0 && !this.multiple) {
      if (this.service.instanceOfOption(array[0]) && this.optionsRef) {
        const arrayOption = array as Option[];
        if (this.service.getSelectedValues()) {
          const index = arrayOption.indexOf(this.service.getSelectedValues());
          this.scrollByIndex(this.optionsRef, index);
        }
      } else if (
        !this.service.instanceOfOption(array[0]) &&
        this.optionGroupRef
      ) {
        const arrayOption = array as OptionGroup[];
        if (this.service.getSelectedValues()) {
          let indexOption, indexGroup;
          arrayOption.map((op, index) => {
            const found = this.findOption(
              op.options,
              this.service.getSelectedValues().value
            );
            if (found !== undefined && found != null) {
              indexOption = op.options.indexOf(found) + 1;
              indexGroup = index;
            }
          });
          const optionGroupElement = this.optionGroupRef.toArray()[indexGroup];
          this.scrollByIndex(optionGroupElement, indexOption);
        }
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
      if (!this.multiple) {
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

  setPlaceholder() {
    if (this.placeholder) {
      return this.placeholder;
    } else {
      if (this.service.getSelectedValues()?.label && !this.multiple) {
        return this.service.getSelectedValues()?.label;
      } else if (!this.multiple && !this.service.getSelectedValues()?.label) {
        return "Choose an option";
      } else {
        return "Choose options";
      }
    }
  }

  handleOnKeyDown(event) {
    if (this.isOpened) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.service.onArrowDown();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.service.onArrowUp();
          break;
        case "Enter":
          this.handleEnterKey(event);
          break;
        // case "Escape":
        //   if (this.suggestions && this.suggestions.length) {
        //     event.preventDefault();
        //     this.handleDefaultClearAction();
        //     this.handleOnClose();
        //   }
        //   break;
      }
    } 
    if(this.focusedOption.option === -1 && this.focusedOption.group === -1){
      if(event.key === "Enter"){
        this.isOpened = !this.isOpened;
        this.setInitialFocusOption();
      }
    }
  }

  handleOnHover(indexOption: number, indexGroup?: number) {
    this.service.instanceOfOption(this.options[0])
      ? this.service.setVisualFocused({ option: indexOption })
      : this.service.setVisualFocused({
          option: indexOption,
          group: indexGroup,
        });
  }

  handleEnterKey(event){
    if (this.focusedOption.option !== -1) {
      let arrayOption, option;
      if(this.service.instanceOfOption(this.options[0])){
        arrayOption = this.service.filteredOptions.getValue() as Option[];
        option = arrayOption[this.focusedOption.option];
      } else{
        arrayOption = this.service.filteredOptions.getValue() as OptionGroup[];
        option = arrayOption[this.focusedOption.group].options[this.focusedOption.option];
      }
      this.handleOptionClick(option, event);
    } 
  }

  setInitialFocusOption(){
    if(!this.isOpened){
      this.service.setVisualFocused({
        option: -1,
        group: -1,
      });
    }
  }
}
