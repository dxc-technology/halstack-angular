import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-radio",
  templateUrl: "./dxc-radio.component.html",
  styleUrls: [
    "./dxc-light-radio.component.scss",
    "./dxc-dark-radio.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcRadioComponent implements OnInit {
  @Input() checked: boolean;
  @Input() theme: string;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean | string;
  @Input() labelPosition: string;
  @Output() checkedChange: EventEmitter<any>;
  @Input() margin: string;
  @Input() size: string;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    checked: false,
    theme: "light",
    disabled: false,
    disableRipple: false,
    label: null,
    name: "",
    required: false,
    labelPosition: "after",
    margin: null,
    size: "medium"
  });

  sizes = {
    small: "120px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset"
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.labelPosition === "before" ? "before" : "after";
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {
    this.checkedChange = new EventEmitter();
  }

  calculateWidth(margin, size) {
    if (size === "fillParent") {
      return this.utils.calculateWidthWithMargins(this.sizes, size, margin);
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  onChange(event: any) {
    this.checkedChange.emit(event.source.checked);
  }

  setTextAlign(labelPosition){
    if(labelPosition==="before") {
      return css `
        text-align: end;
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;

      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs.margin, inputs.size)}
      mat-radio-button {
        width: 100%;
        .mat-radio-label {
          white-space: normal;
          .mat-radio-label-content {
            padding: 0px !important;
            width: calc(100% - 50px);
            ${this.setTextAlign(inputs.labelPosition)}
          }
          .mat-radio-required {
            margin-right: 1px;
          }
          display: inline-flex;
          align-items: center;

          .mat-radio-container {
            ${inputs.labelPosition === "after"
            ? css`
                margin-right: 15px;
                margin-left: 15px;
                margin-top: 10px;
                margin-bottom: 10px;
              `
            : inputs.labelPosition === "before"
            ? css`
                margin-left: 15px;
                margin-right: 15px;
                margin-top: 10px;
                margin-bottom: 10px;
              `
            : css``}

            .mat-radio-frame {
              border-radius: 4px;
            }
          }
        }

        &.mat-radio-disabled {
          .mat-radio-label {
            cursor: not-allowed;
          }
        }
      }
    `;
  }
}
