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
import { CssUtils } from '../utils';

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
  @Input() margin: string;
  @Input() size: string;
  @Input() value: string;

  @Output() onChange: EventEmitter<any>;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  renderedChecked: boolean;

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
    size: "medium",
    value: null,
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
    this.renderedChecked = this.checked;
    
    this.labelPosition === "before" ? "before" : "after";
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {
    this.onChange = new EventEmitter();
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  ngOnInit() {
    this.renderedChecked = this.checked;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  onValueChange($event: any) {
    this.onChange.emit($event.source.checked);

    if (this.checked === undefined || this.checked === null){
      this.renderedChecked = $event.source.checked;
    }else{
      $event.source.checked = this.renderedChecked;
    }  
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
      ${this.calculateWidth(inputs)}
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

  ngOnDestroy(){
    this.utils = null;
  }
}
