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
  options: (Option | OptionGroup)[];
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
  options = [
    {
      label: "label1",
      value: "1",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></g></g></svg>',
    },
    { label: "label2", value: "2" },
    {
      label: "Group label 1",
      options: [
        { label: "label3", value: "3" },
        { label: "label4", value: "4" },
        {
          label: "label5",
          value: "5",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></g></g></svg>',
        },
      ],
    },
    { label: "label6", value: "6" },
    {
      label: "Group label 2",
      options: [
        { label: "label7", value: "7" },
        { label: "label8", value: "8" },
      ],
    },
    { label: "label9", value: "9" },
    { label: "label10", value: "10" },
  ];

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

  @ViewChild("containerRef", { static: false }) containerRef: ElementRef;
  @ViewChild("optionRef", { static: false }) optionRef: ElementRef;

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
    } else {
      this.service.setSelectedValues(option);
      this.onChange.emit(option.value);
      this.isOpened = false;
    }
  }

  // public getLabelSelected(): string {
  //   if (!this.multiple) {
  //     if (this.service.getSizeSelectedValues() > 0) {
  //       const arr = this.options;
  //       const selected: Option = this.findOptions(arr);
  //       return selected.label;
  //     } else return "Choose an option";
  //   } else {
  //     if (this.service.getSizeSelectedValues() > 0) {
  //       const arr = this.options;
  //       let arraylabels = [];
  //       arraylabels = this.iterateOptions(arr);
  //       const str = arraylabels.join(", ");
  //       return str;
  //     } else return "Choose options";
  //   }
  // }

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
    array.find((op) => {
      if (this.instanceOfOption(op) && op.value === value) {
        selected = op;
      } else if (!this.instanceOfOption(op)) {
        selected = this.findOptionByValue(op.options);
      }
      return selected;
    });
    return selected;
  }

  // findOptions(array: any) {
  //   let selected;
  //   array.find((op) => {
  //     if (
  //       this.instanceOfOption(op) &&
  //       op.value === this.service.selectedValues.getValue()
  //     ) {
  //       selected = op;
  //     } else if (!this.instanceOfOption(op)) {
  //       selected = this.findOptions(op.options);
  //     }
  //     return selected;
  //   });
  //   return selected;
  // }

  // iterateOptions(array: any) {
  //   let arraylabels = [];
  //   array.map((op) => {
  //     if (this.instanceOfOption(op)) {
  //       if (this.service.selectedValues.getValue().includes(op.value)) {
  //         arraylabels.push(op.label);
  //       }
  //     } else {
  //       let optionsGroup = this.iterateOptions(op.options);
  //       optionsGroup.map((element) => arraylabels.push(element));
  //     }
  //   });
  //   return arraylabels;
  // }

  iterateOptions(array: any) {
    let arrayOptions = [];
    array.map((op) => {
      if (this.instanceOfOption(op)) {
        if (this.service.selectedValues.getValue().includes(op.value)) {
          arrayOptions.push(op);
        }
      } else {
        let optionsGroup = this.iterateOptions(op.options);
        optionsGroup.map((element) => arrayOptions.push(element));
      }
    });
    return arrayOptions;
  }

  instanceOfOption(option: any): option is Option {
    return "value" in option;
  }

  handleSelectOpen() {
    this.isOpened = !this.isOpened;
  }

  isSelected(option): boolean {
    if (!this.multiple) {
      return this.service.selectedValues?.getValue()?.value === option.value ?  true :  false;
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const selected = this.service.selectedValues
          .getValue()
          .find((op) => op.value === option.value);
        return selected !== null && selected !== undefined;
      } else return false;
    }
  }
}
