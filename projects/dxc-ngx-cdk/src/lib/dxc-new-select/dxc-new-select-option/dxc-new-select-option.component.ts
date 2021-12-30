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
  selector: "dxc-new-select-option",
  templateUrl: "./dxc-new-select-option.component.html",
})
export class DxcNewSelectOptionComponent implements OnInit {
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
    this.service.selectedValues.subscribe((values) => {
      this.selected = this.isSelected();
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

  isSelected(): boolean {
    if (!this.multiple) {
      return this.service.getSelectedValues()?.value === this.option.value
        ? true
        : false;
    } else {
      if (this.service.getSizeSelectedValues() > 0) {
        const selected = this.service
          .getSelectedValues()
          .find((op) => op.value === this.option.value);
        return selected !== null && selected !== undefined;
      } else return false;
    }
  }

  setSelectedStyles() {
    return css`
      background-color: var(--newSelect-selectedlistItemBackgroundColor);
      :hover {
        background-color: var(--newSelect-selectedHoverListItemBackgroundColor);
      }
      :active {
        background-color: var(--newSelect-selectedActivelistItemBackgroundColor);
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
      }
      :active {
        background-color: var(--newSelect-unselectedActiveListItemBackgroundColor);
      }
      ${inputs.checked && inputs.multiple ? this.setSelectedStyles() : ""}
      &.selected {
        ${this.setSelectedStyles()}
        &.focused {
          background-color: var(--newSelect-selectedHoverListItemBackgroundColor);
        }
      }
      &.focused {
        background-color: var(--newSelect-unselectedHoverListItemBackgroundColor);
      }
      .optionLabel {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 2px 8px;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid var(--newSelect-listItemDividerColor);
        .iconLabel {
          display: flex;
          align-items: center;
          margin-left: ${!inputs.multiple ? "8px" : ""};
          svg {
            fill: var(--newSelect-listItemIconColor);
          }
        }
        .label {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 0.5rem;
          font-family: var(--newSelect-fontFamily);
          font-size: var(--newSelect-listItemFontSize);
          font-style: var(--newSelect-listItemFontStyle);
          font-weight: var(--newSelect-listItemFontWeight);
          color: var(--newSelect-listItemFontColor);
        }
        .checkIcon {
          display: flex;
          margin-right: 8px;
          align-items: center;
        }
      }
      .checkboxContainer {
        width: 100%;
        height: 100%;
        display: flex;
        div {
          display: flex;
        }
      }
      dxc-checkbox {
        margin-left: 8px;
      }
    `;
  }
}