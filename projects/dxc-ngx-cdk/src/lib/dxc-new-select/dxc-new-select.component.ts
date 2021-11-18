import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  SimpleChanges,
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
    { label: "label1", value: "1" },
    { label: "label2", value: "2" },
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

  constructor(
    private helper: DxcNewSelectHelper,
    public service: SelectService
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

  handleOptionClick(value) {
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
      console.log();
      this.service.setSelectedValues(value);
      this.onChange.emit(value);
    }
  }

  public getLabelSelected(): string {
    if (!this.multiple) {
      if (this.service.getSizeSelectedValues() > 0) {
        const arr = this.options;
        const selected = arr.find(
          (op) => op.value === this.service.selectedValues.getValue()
        );
        return selected.label;
      } else return "Choose an option";
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const arr = this.options;
        let a = [];
        arr.map((op) => {
          if (this.service.selectedValues.getValue().includes(op.value))
            a.push(op.label);
        });
        let str = a.join(", ");
        return str;
      } else return "Choose options";
    }
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
}
