import {
  Component,
  OnInit,
  Input,
  HostBinding,
  SimpleChanges,
  HostListener,
  ElementRef,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { RadioGroupService } from "../services/radio-group.service";
import { RadioItem } from "../dxc-radio-group.types";

@Component({
  selector: "dxc-radio-group-item",
  templateUrl: "./dxc-radio.component.html",
})
export class DxcRadioGroupItemComponent implements OnInit {
  @HostBinding("class") styles;
  @HostBinding("class.selected")
  selected: boolean = false;

  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  disabled: boolean = false;

  @Input()
  errorState: boolean = false;

  @Input()
  readOnlyState: boolean = false;

  @Input()
  indexValue: number;

  radioLabelId = "";

  defaultInputs = new BehaviorSubject<RadioItem>({
    label: "",
    value: undefined,
    disabled: false,
  });

  constructor(private service: RadioGroupService, private elRef: ElementRef) {
    this.service.indexToFocus.subscribe((index) => {
      if (index >= 0) {
        if (this.indexValue === index) {
          this.elRef.nativeElement.focus();
        }
      }
    });
  }

  @HostListener("click")
  onClickHandler() {
    if (!this.disabled) {
      if (!this.service.firstTabbedFocus) {
        this.service.newValue.next(this.value);
        this.service.firstTabbedFocus = true;
      }
      if (this.service.newValue.value !== this.value) {
        this.service.newValue.next(this.value);
      }
    }
  }

  @HostListener("focus")
  onFocusHandler() {
    if (!this.disabled) {
      if (this.service.firstTabbedFocus) {
        this.service.newValue.next(this.value);
      }
      this.service.firstTabbedFocus = true;
    }
  }

  ngOnInit(): void {
    this.service.selectedValue.subscribe((newValue) => {
      if (this.value || (this.value === "" && newValue) || newValue === "") {
        this.selected = this.value === newValue;
      }
    });
    this.radioLabelId = `radio-${uuidv4()}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  private getBorderColor() {
    if (this.disabled) {
      return "var(--radioGroup-disabledRadioInputColor)";
    } else if (this.errorState) {
      return "var(--radioGroup-errorRadioInputColor)";
    } else if (this.readOnlyState) {
      return "var(--radioGroup-readonlyRadioInputColor)";
    } else {
      return "var(--radioGroup-radioInputColor)";
    }
  }

  private getHoverBorderColor() {
    if (this.errorState) {
      return "var(--radioGroup-hoverErrorRadioInputColor)";
    } else if (this.readOnlyState) {
      return "var(--radioGroup-hoverReadonlyRadioInputColor)";
    } else {
      return "var(--radioGroup-hoverRadioInputColor)";
    }
  }

  private getActiveBorderColor() {
    if (this.errorState) {
      return "var(--radioGroup-activeErrorRadioInputColor)";
    } else if (this.readOnlyState) {
      return "var(--radioGroup-activeReadonlyRadioInputColor)";
    } else {
      return "var(--radioGroup-activeRadioInputColor)";
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      align-items: center;
      ${inputs.disabled ? "pointer-events: none" : "cursor: pointer"};
      width: fit-content;
      .radioInputContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        width: 24px;
        .radioInput {
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 18px;
          height: 18px;
          border: var(--radioGroup-radioInputBorderWidth)
            var(--radioGroup-radioInputBorderStyle);
          border-color: ${this.getBorderColor()};
          border-radius: 50%;
          box-shadow: 0 0 0 2px transparent;
        }
      }
      &.selected {
        .dot {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: ${this.getBorderColor()};
        }
      }
      .radioLabel {
        margin-left: var(--radioGroup-radioInputLabelMargin);
        color: ${inputs.disabled
          ? "var(--radioGroup-disabledRadioInputLabelFontColor)"
          : "var(--radioGroup-radioInputLabelFontColor)"};
        font-family: var(--radioGroup-radioInputLabelFontFamily);
        font-size: var(--radioGroup-radioInputLabelFontSize);
        font-style: var(--radioGroup-radioInputLabelFontStyle);
        font-weight: var(--radioGroup-radioInputLabelFontWeight);
        line-height: var(--radioGroup-radioInputLabelLineHeight);
      }
      &:focus,
      &:focus-visible {
        outline: none;
        .radioInput {
          outline: var(--radioGroup-focusBorderWidth)
            var(--radioGroup-focusBorderStyle)
            var(--radioGroup-focusRadioInputColor);
          outline-offset: 1px;
        }
      }
      &:hover {
        .radioInput {
          border-color: ${this.getHoverBorderColor()};
        }
        &.selected {
          .dot {
            background-color: ${this.getHoverBorderColor()};
          }
        }
      }
      &:active {
        .radioInput {
          border-color: ${this.getActiveBorderColor()};
        }
        &.selected {
          .dot {
            background-color: ${this.getActiveBorderColor()};
          }
        }
      }
    `;
  }
}
