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
import { Option } from "../interfaces/option.interface";
import { SelectService } from "../services/select.service";
import { css } from "emotion";

@Component({
  selector: "dxc-select-option",
  templateUrl: "./dxc-select-option.component.html",
})
export class DxcSelectOptionComponent implements OnInit {
  @HostBinding("class") className;
  @HostBinding("class.selected") selected = false;
  @HostBinding("class.focused") isfocused = false;

  @Input() option: Option;
  @Input() multiple: boolean;
  @Input() checked: boolean;
  @Input() focused: boolean;
  @Input() optional: boolean;

  @Output() optionClick: EventEmitter<any> = new EventEmitter();
  @Output() optionMouseDown: EventEmitter<any> = new EventEmitter();

  defaultInputs = new BehaviorSubject<any>({
    option: null,
    multiple: false,
    checked: null,
    optional: false,
  });

  constructor(public service: SelectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isfocused = this.focused;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
    this.service.selectedValues.subscribe((selectedValues) => {
      this.selected = this.isSelected(selectedValues);
    });
  }

  handleOptionClick(event) {
    this.optionClick.emit(event);
  }

  handleOptionMouseDown(event) {
    this.optionMouseDown.emit(event);
  }

  public isValueSelected = (value): boolean =>
    this.service.getSelectedValues() &&
    this.service.getSelectedValues().includes(value);

  isSelected(selectedValues): boolean {
    if (!this.multiple) {
      return selectedValues?.value === this.option.value ? true : false;
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const selected = selectedValues.find(
          (op) => op.value === this.option.value
        );
        return selected !== null && selected !== undefined;
      } else return false;
    }
  }

  setSelectedStyles() {
    return css`
      background-color: var(--select-selectedListOptionBackgroundColor);
      :hover {
        background-color: var(--select-selectedHoverListOptionBackgroundColor);
      }
      :active {
        background-color: var(--select-selectedActiveListOptionBackgroundColor);
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      height: 32px;
      :hover {
        cursor: pointer;
        background-color: var(
          --select-unselectedHoverListOptionBackgroundColor
        );
      }
      :active {
        background-color: var(
          --select-unselectedActiveListOptionBackgroundColor
        );
      }
      ${inputs.checked && inputs.multiple ? this.setSelectedStyles() : ""}
      &.selected {
        ${this.setSelectedStyles()}
        &.focused {
          background-color: var(
            --select-selectedHoverListOptionBackgroundColor
          );
        }
        .optionLabel {
          border-bottom: 1px solid transparent;
        }
      }
      &.focused {
        box-shadow: inset 0 0 0 2px var(--select-focusListOptionBorderColor);
        .optionLabel {
          border-bottom: 1px solid transparent;
        }
      }
      .optionLabel {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 2px 8px;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid var(--select-listOptionDividerColor);
        overflow: hidden;
        .iconLabel {
          display: flex;
          align-items: center;
          margin-left: ${!inputs.multiple ? "8px" : ""};
          svg {
            fill: var(--select-listOptionIconColor);
          }
        }
        .label {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          align-self: center;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          span {
            width: 100%;
            height: 100%;
            font-family: var(--select-fontFamily);
            font-size: var(--select-listOptionFontSize);
            font-style: var(--select-listOptionFontStyle);
            font-weight: var(--select-listOptionFontWeight);
            color: var(--select-listOptionFontColor);
          }
        }
        .checkIcon {
          display: flex;
          margin-right: 0.5rem;
          align-items: center;
          svg {
            fill: var(--select-selectedListOptionIconColor);
            width: 16px;
            height: 16px;
          }
        }
      }
      .checkboxContainer {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        div {
          display: flex;
          overflow: hidden;
        }
        dxc-checkbox {
          .mat-checkbox-label {
            span:last-child {
              display: inline-grid;
              .checkboxLabel {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
                width: 100%;
              }
            }
          }
        }
      }
    `;
  }
}
