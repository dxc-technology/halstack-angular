import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject, Subscription } from "rxjs";
import { CssUtils } from "../utils";
import { BlurEvent, RadioGroupProperties } from "./dxc-radio-group.types";
import { RadioGroupService } from "./services/radio-group.service";
import { v4 as uuidv4 } from "uuid";
import { RadioItem } from "./interfaces/radio-item.interface";

@Component({
  selector: "dxc-radio-group",
  templateUrl: "./dxc-radio-group.component.html",
  providers: [CssUtils, RadioGroupService],
})
export class DxcRadioGroupComponent implements OnInit {
  @HostBinding("class") styles;

  /**
   * Value of the radio group. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  @Input()
  label: string = "";

  /**
   * Helper text to be placed above the radio group.
   */
  @Input()
  helperText: string = "";

  /**
   * Name attribute of the input element. This attribute will allow users to
   * find the component's value during the submit event.
   */
  @Input()
  name: string;

  /**
   * Value of the radio group. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  @Input()
  value?: string;

  /**
   * If true, the component will be marked as readonly.
   */
  @Input()
  readOnly: boolean = false;

  /**
   * If true, the component will be disabled.
   */
  @Input()
  disabled: boolean = false;

  /**
   * If true, the radio group will be optional, showing (Optional) next to the
   * label and adding a default last option with an empty string as value.
   * Otherwise, the field will be considered required and an error will be
   * passed as a parameter to the OnBlur functions if an option wasn't selected.
   */
  @Input()
  optional: boolean = false;

  /**
   * Label of the optional item.
   */
  @Input()
  optionalItemLabel?: string = "N/A";

  /**
   * Default value of the radio group, this property is used to have a default
   * value and also have uncontrolled behaviour.
   */
  @Input()
  defaultValue: string;

  /**
   * An array of objects representing the selectable options. Each object
   * RadioItem has the following properties:
   * - label: string: Label of the option placed next to the radio input.
   * - value: string: Value of the option. It should be unique and not
   * an empty string, which is reserved to the optional item added by optional prop.
   * - disabled: boolean: disables the option.
   */
  @Input()
  options: RadioItem[];

  /**
   * Sets the orientation of the options within the radio group.
   */
  @Input()
  stacking: "row" | "column" = "column";

  /**
   * Value of the tabindex attribute.
   */
  @Input()
  tabIndexValue: number = 0;

  /**
   * If it is a defined value and also a truthy string, the component will
   * change its appearance, showing the error below the radio group. If the
   * defined value is an empty string, it will reserve a space below the
   * component for a future error, but it would not change its look. In case of
   * being undefined or null, both the appearance and the space for the error
   * message would not be modified.
   */
  @Input()
  error: string;

  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onBlur: EventEmitter<BlurEvent> = new EventEmitter<BlurEvent>();

  @ViewChild("inputRef", { static: true }) inputRef: ElementRef;

  radioGroupId = "";

  public optionList: RadioItem[] = [];
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
      const errorMessage =
        !(this.value || this.value === "") && !this.optional
          ? "This is required"
          : undefined;
      this.onBlur.emit({ value: this.value, error: errorMessage });
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
    if ($event.key === "Enter" || $event.key === " ") {
      $event.preventDefault();
      if (!this.readOnly) {
        this.onChange.emit(this.optionList[this.indexToFocus].value);
        if (!this.isControlled) {
          this.value = this.optionList[this.indexToFocus].value;
          this.service.selectedValue.next(this.value);
          this.focusHandler();
        }
      }
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
    tabIndexValue: 0,
    error: undefined,
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
    this.radioGroupId = `radioGroup-${uuidv4()}`;
    const tempOptions = [];
    tempOptions.push(...this.options);
    if (this.optional) {
      // add empty option to the begginning of the array
      tempOptions.push({
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
      }
      .groupLabel {
        ${inputs.helperText
          ? ""
          : "margin-bottom: var(--radioGroup-groupLabelMargin);"}
      }
      .helperText,
      .optionalLabel {
        color: ${inputs.disabled
          ? "var(--radioGroup-disabledHelperTextFontColor)"
          : "var(--radioGroup-helperTextFontColor)"};
        font-family: var(--radioGroup-helperTextFontFamily);
        font-size: var(--radioGroup-helperTextFontSize);
        font-style: var(--radioGroup-helperTextFontStyle);
        font-weight: var(--radioGroup-helperTextFontWeight);
        line-height: var(--radioGroup-helperTextLineHeight);
        margin-bottom: var(--radioGroup-groupLabelMargin);
      }
      .radio-list-container {
        display: flex;
        flex-direction: ${inputs.stacking};
        gap: ${inputs.stacking === "row"
          ? "var(--radioGroup-groupHorizontalGutter)"
          : "var(--radioGroup-groupVerticalGutter)"};
      }
      .errorMessage {
        color: var(--radioGroup-errorMessageColor);
        font-size: var(--radioGroup-errorMessageFontSize);
        font-weight: var(--radioGroup-errorMessageFontWeight);
        line-height: var(--radioGroup-errorMessageLineHeight);
        font-family: var(--radioGroup-labelFontFamily);
        min-height: var(--radioGroup-errorMessageLineHeight);
      }
      .valueInput {
        display: none;
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
    this.subscriptionOptions.unsubscribe();
    this.subcriptionNewValue.unsubscribe();
  }
}
