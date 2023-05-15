import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "@emotion/css";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ToggleGroupService } from "./services/toggleGroup.service";

@Component({
  selector: "dxc-togglegroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: [],
  providers: [CssUtils, ToggleGroupService],
})
export class DxcToggleGroupComponent implements OnInit {
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = false;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Input() public margin: any;
  @Input() public value: any;
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  selectedOptions = [];

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0
  });
  constructor(
    private utils: CssUtils,
    private service: ToggleGroupService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewInit() {
    if (this.value || this.value === "") {
      this.getSelectedByValue();
    }
    this.service.values.subscribe((valuesSelected) => {
      if (valuesSelected && valuesSelected[0]) {
        this.selectedOptions = valuesSelected;
      } else {
        this.selectedOptions = [];
      }
    });

    this.service.selected.subscribe((selected) => {
      this.valueChanged(selected);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    if (this.value || this.value === "") {
      this.getSelectedByValue();
    }
    this.service.setTabIndexValue(this.disabled ? -1 : this.tabIndexValue);
  }

  getSelectedByValue() {
    this.selectedOptions = [];
    if (this.value !== "") {
      if (Array.isArray(this.value)) {
        this.selectedOptions = this.value;
      } else {
        this.selectedOptions.push(this.value);
      }
    }
    this.service.setValues(this.selectedOptions);
    this.cdRef.detectChanges();
  }

  public valueChanged(newSelected: any): void {
    if (!this.disabled) {
      const selectedValues = [];
      if (this.value || this.value === "") {
        if (this.multiple) {
          this.selectedOptions.map((value) => {
            if (newSelected && value !== newSelected) {
              selectedValues.push(value);
            }
          });
        }
        if (!this.selectedOptions.includes(newSelected)) {
          selectedValues.push(newSelected);
        }
      } else {
        if (
          newSelected &&
          this.selectedOptions &&
          this.selectedOptions.includes(newSelected)
        ) {
          const index = this.selectedOptions.indexOf(newSelected);
          this.selectedOptions.splice(index, 1);
        } else {
          if (this.multiple && newSelected) {
            this.selectedOptions.push(newSelected);
          } else {
            this.selectedOptions = [newSelected];
          }
        }
        this.selectedOptions.map((value) => {
          selectedValues.push(value);
        });
        this.service.setValues(selectedValues);
      }
      if (newSelected && this.multiple && selectedValues && selectedValues[0]) {
        this.onChange.emit(selectedValues);
      } else if (newSelected) {
        this.onChange.emit(selectedValues[0] || "");
      }
      this.cdRef.detectChanges();
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          background: var(--toggle-disabledUnselectedBackgroundColor) !important;
          color: var(--toggle-disabledUnselectedFontColor) !important;
          .toggleContent{
            outline: none;
          }
          &:hover {
            cursor: not-allowed;
          }
          &.selected {
            background: var(--toggle-disabledSelectedBackgroundColor) !important;
            color: var(--toggle-disabledSelectedFontColor) !important;
          }
        }
      `;
    } else {
      return css`
        dxc-toggle {
          &:hover {
            cursor: pointer;
          }
          &:hover {
            background: var(--toggle-unselectedBackgroundHoverColor);
            color: var(--toggle-unselectedHoverFontColor);
          }
          &.selected {
            background: var(--toggle-selectedBackgroundColor);
            color: var(--toggle-selectedFontColor);
            &:hover {
              background: var(--toggle-selectedHoverBackgroundColor);
              color: var(--toggle-selectedHoverFontColor);
            }
          }
        }
      `;
    }
  }

  setDxcToggleGroupDynamicStyle(inputs: any) {
    return css`
      display: flex;
      align-items: center;
      height: 43px;
      width: fit-content;
      border-radius: 4px;
      overflow: hidden;
      ${this.utils.getMargins(inputs.margin)}

      ${this.disabledStyles()}
        dxc-toggle {
        height: 100%;
        display: flex;
        background: var(--toggle-unselectedBackgroundColor);
        color: var(--toggle-unselectedFontColor);

        .toggleContent {
          height: 100%;
          display: flex;
          align-items: center;
          .label {
            margin: 12px 30px;
            letter-spacing: 1.25px;
            font: normal 14px  font-family: var(--fontFamily);
          }
          dxc-toggle-icon {
            display: flex;
          }
          .icon {
            width: 24px;
            height: 24px;
            margin: 10px 12px;
          }
        }
      }
    `;
  }
}
