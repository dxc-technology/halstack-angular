import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  Optional,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
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

  private isControlled: boolean = false;

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
    tabIndex: 0
  });

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef, private service: RadioGroupService) {
    this.service.optionList.subscribe((options) => (this.optionList = options));
    this.service.newValue.subscribe((newValue) => {
      if (newValue || newValue === "") {
        this.onChange.emit(newValue);
        if(!this.isControlled) {
          this.value = newValue;
          this.service.selectedValue.next(this.value);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.value && this.service.selectedValue.value !== this.value) {
      this.service.selectedValue.next(this.value);
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
    console.log(this.value);
    if (this.value || this.value === "") {
      this.isControlled = true;
      this.service.selectedValue.next(this.value);
    } else {
      if(this.defaultValue || this.defaultValue === "") {
        this.value = this.defaultValue;
      }
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
            background: #FABADA;
          }
        }
      }
    `;
  }

  ngOnDestroy() {
    this.utils = null;
  }
}
