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
  optionalItemLabel?: string;

  @Input()
  defaultValue: string;

  @Input()
  options: Option[];

  @Input()
  stacking: "row" | "column" = "column";

  @Input()
  tabIndex: number = 0;

  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();

  // ref

  public optionList: Option[] = [];
  public defaultFocusOption: number = 0;

  private isControlled: boolean = false;
  private subscriptionOptions: Subscription;
  private subcriptionNewValue: Subscription;

  @HostListener("blur")
  onBlurHandler() {
    // reset defaultFocusOption
  }

  @HostListener("focus")
  onFocusHandler() {
    //Sync this.service.indexToFocus in case it is not updated
    if (this.service.indexToFocus.value !== this.defaultFocusOption)
      this.focusHandler();
  }

  /**
   * Check which option index to focus
   */
  @HostListener("keydown", ["$event"])
  onKeyHandler($event) {
    if ($event.key === "ArrowDown" || $event.key === "ArrowRight") {
      $event.preventDefault();
      if (this.defaultFocusOption === this.optionList.length - 1) {
        this.defaultFocusOption = 0;
      } else {
        this.defaultFocusOption++;
      }
    }
    if ($event.key === "ArrowUp" || $event.key === "ArrowLeft") {
      $event.preventDefault();
      if (this.defaultFocusOption === 0) {
        this.defaultFocusOption = this.optionList.length - 1;
      } else {
        this.defaultFocusOption--;
      }
    }
    this.service.indexToFocus.next(this.defaultFocusOption);
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
  });

  constructor(private utils: CssUtils, private service: RadioGroupService) {
    this.subscriptionOptions = this.service.optionList.subscribe(
      (options) => (this.optionList = options)
    );
    this.subcriptionNewValue = this.service.newValue.subscribe((newValue) => {
      if (newValue || newValue === "") {
        this.onChange.emit(newValue);
        console.log(newValue);
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
    if (this.optional && this.optionalItemLabel) {
      // add empty option to the begginning of the array
      tempOptions.unshift({
        label: "None",
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
        this.defaultFocusOption = this.optionList.indexOf(selectedOption);
        if (this.defaultFocusOption !== this.service.indexToFocus.value)
          this.service.indexToFocus.next(this.defaultFocusOption);
      }
    } else {
      if (this.defaultFocusOption !== this.service.indexToFocus.value)
          this.service.indexToFocus.next(this.defaultFocusOption);
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      flex-direction: column;
      .radio-list-container {
        display: flex;
        flex-direction: ${inputs.stacking};
        dxc-radio-group-item {
          &.selected {
            background: #fabada;
          }
        }
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
    this.subscriptionOptions.unsubscribe();
    this.subcriptionNewValue.unsubscribe();
  }
}
