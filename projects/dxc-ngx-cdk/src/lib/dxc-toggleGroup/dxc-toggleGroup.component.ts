import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
  QueryList,
  ContentChildren,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DxcToggleComponent } from "./dxc-toggle/dxc-toggle.component";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: "dxc-togglegroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils],
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
  @ContentChildren(DxcToggleComponent)
  toggleGroup: QueryList<DxcToggleComponent>;

  selectedOptions = [];
  private isControlled: boolean = false;

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
  });
  constructor(private utils: CssUtils, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterContentInit() {
    // reference to the dxc-toggles and manipulating them depending on the given data
    if (this.toggleGroup) {
      this.toggleGroup.forEach((item:DxcToggleComponent, index: number) => {
        item.onClick.subscribe((value) => {
          if (!this.disabled) {
            this.valueChanged(value);
            console.log('Selected options: ', this.selectedOptions, this.value);
          }
        });
        item.onKeyPress.subscribe((value: string) => {
          if (!this.disabled) {
            this.valueChanged(value);
          }
        });

        setTimeout(() => {
          index === 0 ? item.isFirst = true : (index === this.toggleGroup.length - 1 ? item.isLast = true: item.isLast = false);
          item.tabIndexValue = this.disabled ? -1 : this.tabIndexValue;
          this.setToggleSelected(item);
        });
      });

    }
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
      this.isControlled = true;
      this.changeSelectedToggle();
    }
  }



  private valueChanged(selectedOption: any): void {
    let newSelectedOptions = [];
    //handle When value is defined
    if (!this.isControlled) {
      if (this.multiple) {
        newSelectedOptions = this.selectedOptions.map((value) => value);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else {
          newSelectedOptions.push(selectedOption);
        }
        this.selectedOptions = newSelectedOptions;
      } else {
        this.selectedOptions = selectedOption === this.selectedOptions ? null : selectedOption;
      }
    } else if (this.multiple) {
      newSelectedOptions = this.value.map((v) => v);
      if (newSelectedOptions.includes(selectedOption)) {
        const index = newSelectedOptions.indexOf(selectedOption);
        newSelectedOptions.splice(index, 1);
      } else newSelectedOptions.push(selectedOption);
      this.value = newSelectedOptions;
    }
    this.changeSelectedToggle(this.multiple ? selectedOption : null);
    // Emit the new selected values
    this.callback();
  }

  private callback() {
      this.onChange.emit(this.isControlled ? this.value: this.selectedOptions);
  }

  private changeSelectedToggle(selectedValue? :string) {
    if (this.toggleGroup) {
      if (selectedValue){
        const filterToggles = this.toggleGroup.filter(item=> item.value === selectedValue);
        filterToggles.forEach((item) => {
          this.setToggleSelected(item);
          console.log('Cambiando toggle selected property', item.value, item.selected);
        });
      }else {
        this.toggleGroup.forEach((item) => {
          this.setToggleSelected(item);
          console.log('Cambiando toggle selected property', item.value, item.selected);
        });
      }
      this.ref.detectChanges();
    }
  }

  private setToggleSelected(item: DxcToggleComponent) {
    if (this.multiple) {
      if (this.isControlled) {
        item.selected = this.value.includes(item.value);
      } else {
        item.selected = this.selectedOptions.includes(item.value);
      }
    } else {
      if (this.isControlled) {
        item.selected = item.value === this.value;
      } else {
        item.selected = item.value === this.selectedOptions;
      }
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          background: var(
            --toggleGroup-unselectedDisabledBackgroundColor
          ) !important;
          color: var(--toggleGroup-unselectedDisabledFontColor) !important;
          .toggleContent {
            &:focus {
              outline: none !important;
            }
            outline: none;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedDisabledFontColor) !important;
            }
          }
          &:hover {
            cursor: not-allowed;
          }
          &.selected {
            background: var(
              --toggleGroup-selectedDisabledBackgroundColor
            ) !important;
            color: var(--toggleGroup-selectedDisabledFontColor) !important;
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedDisabledFontColor) !important;
            }
          }
        }
      `;
    } else {
      return css`
        dxc-toggle {
          &:hover {
            cursor: pointer;
            background: var(--toggleGroup-unselectedHoverBackgroundColor);
            color: var(--toggleGroup-unselectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-unselectedFontColor) !important;
            }
          }
          &:active {
            cursor: pointer;
            background: var(--toggleGroup-unselectedActiveBackgroundColor);
            color: var(--toggleGroup-selectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor) !important;
            }
          }
          &:focus,
          &:focus-within,
          &:focus-visible {
            outline: solid 2px var(--toggleGroup-focusColor);
            outline-offset: -2px;
          }
          &.selected {
            background: var(--toggleGroup-selectedBackgroundColor);
            color: var(--toggleGroup-selectedFontColor);
            .icon img,
            .icon svg {
              fill: var(--toggleGroup-selectedFontColor) !important;
            }
            &:active {
              background: var(
                --toggleGroup-selectedActiveBackgroundColor
              ) !important;
            }
            &:hover {
              background: var(--toggleGroup-selectedHoverBackgroundColor);
              color: var(--toggleGroup-selectedHoverFontColor);
              .icon img,
              .icon svg {
                fill: var(--toggleGroup-selectedHoverFontColor);
              }
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
      min-height: 40px;
      opacity: 1px;
      width: fit-content;
      border-radius: 4px;
      overflow: hidden;
      ${this.utils.getMargins(inputs.margin)}

      ${this.disabledStyles()}
      .first {
        border-radius: 4px 0 0 4px !important;
      }

      .last {
        border-radius: 0 4px 4px 0 !important;
      }
        dxc-toggle {
        height: 100%;
        width: 100%;
        display: flex;
        background: var(--toggleGroup-unselectedBackgroundColor);
        color: var(--toggleGroup-unselectedFontColor);
        border-radius: 0;


        .toggleContent {
          &:focus,
          &:focus-within,
          &:focus-visible {
            outline: none;
          }
          height: 40px;
          width: 100% !important;
          display: flex;
          align-items: center;
          .label {
            padding-left: var(--toggleGroup-labelPaddingLeft);
            padding-right: var(--toggleGroup-labelPaddingRight);
            padding-top: var(--toggleGroup-labelPaddingTop);
            padding-bottom: var(--toggleGroup-labelPaddingBottom);
            letter-spacing: var(--toggleGroup-fontLetterSpacing);
            font-family: var(--toggleGroup-fontFamily);
            font-size: var(--toggleGroup-fontSize);
            font-style: var(--toggleGroup-fontStyle);
            font-weight: var(--toggleGroup-fontWeight);
          }
          .icon {
            display: flex;
            img,
            svg {
              width: var(--toggleGroup-iconSize);
              height: var(--toggleGroup-iconSize);
              padding-left: var(--toggleGroup-iconPaddingLeft);
              padding-right: var(--toggleGroup-iconPaddingRight);
              padding-top: var(--toggleGroup-iconPaddingTop);
              padding-bottom: var(--toggleGroup-iconPaddingBottom);
              fill: var(--toggleGroup-unselectedFontColor);
            }
          }
        }
      }
    `;
  }
}
