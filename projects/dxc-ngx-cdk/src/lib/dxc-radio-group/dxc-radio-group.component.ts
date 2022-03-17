import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  HostListener,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { CssUtils } from "../utils";
import { Option, RadioGroupProperties } from "./dxc-radio-group.types";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { RadioGroupService } from "./services/radio-group.service";

@Component({
  selector: "dxc-radio-group",
  templateUrl: "./dxc-radio-group.component.html",
  providers: [CssUtils, RadioGroupService],
})
export class DxcRadioGroupComponent implements OnInit {
  @HostBinding("class") styles;

  @Input()
  label: string = "";

  @Input()
  helperText: string = "";

  @Input()
  name: string;

  @Input()
  value?: string;

  @Input()
  readOnly: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  optional: boolean = false;

  @Input()
  optionalItemLabel?: string = "N/A";

  @Input()
  defaultValue: string;

  @Input()
  options: Option[];

  @Input()
  stacking: "row" | "column" = "column";

  @Input()
  tabIndex: number = 0;

  @Input()
  error: string;

  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();

  // ref

  public optionList: Option[] = [];
  public indexToFocus: number = 0;

  private isControlled: boolean = false;
  private subscriptionOptions: Subscription;
  private subcriptionNewValue: Subscription;

  @HostListener("focusout", ["$event"])
  onFocusOutHandler($event) {
    // whether you are leaving the radio group component
    if (!$event.currentTarget.contains($event.relatedTarget)) {
      if (this.value || this.value === "") {
        const selectedOption = this.optionList?.find(
          (el) => el.value === this.value
        );
        if (selectedOption) {
          this.indexToFocus = this.optionList.indexOf(selectedOption);
        }
      } else {
        this.indexToFocus = 0;
      }
      this.service.firstTabbedFocus = false;
    }
  }

  @HostListener("keydown", ["$event"])
  onKeyHandler($event) {
    if ($event.key === "ArrowDown" || $event.key === "ArrowRight") {
      $event.preventDefault();
      this.indexToFocusHandler("next");
    }
    if ($event.key === "ArrowUp" || $event.key === "ArrowLeft") {
      $event.preventDefault();
      this.indexToFocusHandler("previous");
    }
    this.service.indexToFocus.next(this.indexToFocus);
  }

  defaultInputs = new BehaviorSubject<RadioGroupProperties>({
    label: "",
    helperText: "",
    name: "",
    value: undefined,
    readOnly: false,
    disabled: false,
    defaultValue: undefined,
    options: [],
    stacking: "column",
    tabIndex: 0,
    error: undefined
  });

  constructor(private utils: CssUtils, private service: RadioGroupService) {
    this.subscriptionOptions = this.service.optionList.subscribe(
      (options) => (this.optionList = options)
    );
    this.subcriptionNewValue = this.service.newValue.subscribe((newValue) => {
      if (!this.disabled && !this.readOnly && (newValue || newValue === "")) {
        this.onChange.emit(newValue);
        if (!this.isControlled) {
          this.value = newValue;
          this.service.selectedValue.next(this.value);
          this.focusHandler();
        }
      }
    });
  }

  ngOnInit(): void {
    const tempOptions = [];
    tempOptions.push(...this.options);
    if (this.optional) {
      // add empty option to the begginning of the array
      tempOptions.unshift({
        label: this.optionalItemLabel,
        value: "",
      });
    }
    this.service.optionList.next(tempOptions);
    if (this.value || this.value === "") {
      this.isControlled = true;
      this.service.selectedValue.next(this.value);
    } else {
      if (this.defaultValue || this.defaultValue === "") {
        this.value = this.defaultValue;
      }
    }
    if (this.disabled) {
      this.indexToFocus = -1;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.value &&
      this.service.selectedValue?.getValue() !== this.value
    ) {
      this.service.selectedValue.next(this.value);
      this.focusHandler();
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styles = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  focusHandler() {
    if (this.value || this.value === "") {
      const selectedOption = this.optionList?.find(
        (el) => el.value === this.value
      );
      if (selectedOption) {
        this.indexToFocus = this.optionList.indexOf(selectedOption);
        if (this.indexToFocus !== this.service.indexToFocus.value)
          this.service.indexToFocus.next(this.indexToFocus);
      }
    } else {
      if (this.indexToFocus !== this.service.indexToFocus.value)
        this.service.indexToFocus.next(this.indexToFocus);
    }
  }

  /**
   * Closest not disabled option to focus
   */
  indexToFocusHandler(direction: string) {
    let auxIndex: number = this.indexToFocus;
    switch (direction) {
      case "next":
        do {
          auxIndex === this.optionList.length - 1 ? (auxIndex = 0) : auxIndex++;
          if (!this.optionList[auxIndex].disabled || this.readOnly) {
            this.indexToFocus = auxIndex;
            break;
          }
        } while (auxIndex !== this.indexToFocus);
        break;
      case "previous":
        do {
          auxIndex === 0 ? (auxIndex = this.optionList.length - 1) : auxIndex--;
          if (!this.optionList[auxIndex].disabled || this.readOnly) {
            this.indexToFocus = auxIndex;
            break;
          }
        } while (auxIndex !== this.indexToFocus);
        break;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .label {
        color: ${inputs.disabled
          ? "var(--radioGroup-disabledLabelFontColor)"
          : "var(--radioGroup-labelFontColor)"};
        font-family: var(--radioGroup-labelFontFamily);
        font-size: var(--radioGroup-labelFontSize);
        font-style: var(--radioGroup-labelFontStyle);
        font-weight: var(--radioGroup-labelFontWeight);
        line-height: var(--radioGroup-labelLineHeight);
        ${inputs.helperText ? "" : "margin-bottom: var(--radioGroup-groupLabelMargin);"}
      }
      .helperText {
        color: ${inputs.disabled
          ? "var(--radioGroup-disabledHelperTextFontColor)"
          : "var(--radioGroup-helperTextFontColor)"};
        font-family: var(--radioGroup-helperTextFontFamily);
        font-size: var(--radioGroup-helperTextFontSize);
        font-style: var(--radioGroup-helperTextFontStyle);
        font-weight: var(--radioGroup-helperTextFontWeight);
        line-height: var(--radioGroup-helperTextLineHeight);
      }
      .radio-list-container {
        display: flex;
        flex-direction: ${inputs.stacking};
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
    this.subscriptionOptions.unsubscribe();
    this.subcriptionNewValue.unsubscribe();
  }
}
