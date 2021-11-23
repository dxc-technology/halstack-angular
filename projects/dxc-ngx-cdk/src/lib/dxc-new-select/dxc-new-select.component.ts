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
    { label: "label1", value: "1", icon: '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>' },
    { label: "label2", value: "2" },
    {
      label: "Group label 1",
      options: [
        { label: "label3", value: "3" },
        { label: "label4", value: "4" },
        { label: "label5", value: "5" },
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
    if (this.value || this.value === "")
      this.service.setSelectedValues(this.value);
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

  handleOptionClick(value, event) {
    this.containerRef.nativeElement.focus();
    event.preventDefault();
    event.stopPropagation();
    this.containerRef.nativeElement.focus();
    if (this.multiple) {
      const arr: string[] = this.service.selectedValues.getValue() || [];
      const index = arr.indexOf(value);
      if (index >= 0) {
        arr.splice(index, 1);
      } else {
        arr.push(value);
      }
      this.onChange.emit(arr);
      if (!(this.value || this.value === "")) {
        this.service.setSelectedValues(arr);
      }
    } else {
      this.service.setSelectedValues(value);
      this.onChange.emit(value);
      this.isOpened = false;
    }
  }

  public getLabelSelected(): string {
    if (!this.multiple) {
      if (this.service.getSizeSelectedValues() > 0) {
        const arr = this.options;
        let selected: Option = this.findOptions(arr);
        return selected.label;
      } else return "Choose an option";
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const arr = this.options;
        let arraylabels = [];
        arraylabels = this.iterateOptions(arr);
        let str = arraylabels.join(", ");
        return str;
      } else return "Choose options";
    }
  }

  removeSelectedValues() {
    this.service.setSelectedValues([]);
    this.onChange.emit([]);
  }

  public isValueSelected = (value): boolean =>
    this.service.selectedValues.getValue() &&
    this.service.selectedValues.getValue().includes(value);

  setDefaultValues() {
    if (this.value) {
      if (Array.isArray(this.value)) {
        this.value.map((v) => this.service.setSelectedValues(v));
      } else {
        this.service.setSelectedValues(this.value);
      }
    }
  }

  findOptions(array: any) {
    let selected;
    array.find((op) => {
      if (
        this.instanceOfOption(op) &&
        op.value === this.service.selectedValues.getValue()
      ) {
        selected = op;
      } else if (!this.instanceOfOption(op)) {
        selected = this.findOptions(op.options);
      }
      return selected;
    });
    return selected;
  }

  iterateOptions(array: any) {
    let arraylabels = [];
    array.map((op) => {
      if (this.instanceOfOption(op)) {
        if (this.service.selectedValues.getValue().includes(op.value)) {
          arraylabels.push(op.label);
        }
      } else {
        let optionsGroup = this.iterateOptions(op.options);
        optionsGroup.map((element) => arraylabels.push(element));
      }
    });
    return arraylabels;
  }

  instanceOfOption(option: any): option is Option {
    return "value" in option;
  }

  handleSelectOpen() {
    this.isOpened = !this.isOpened;
  }

  public isSelected = (option): boolean =>
    !this.multiple
      ? this.service.selectedValues.getValue() === option.value
      : this.service.selectedValues.getValue() &&
        this.service.selectedValues.getValue().includes(option.value);
}
