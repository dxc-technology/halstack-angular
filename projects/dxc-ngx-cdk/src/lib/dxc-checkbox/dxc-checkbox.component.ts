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
  selector: "dxc-checkbox",
  templateUrl: "./dxc-checkbox.component.html",
  styleUrls: [
    "./dxc-checkbox.component.scss",
    "./dxc-light-checkbox.component.scss",
    "./dxc-dark-checkbox.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcCheckboxComponent implements OnInit {
  @Input() value: string;
  @Input() theme: string;
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() margin: any;
  @Input() size: any;
  
  @Output() onChange: EventEmitter<any>;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  renderedChecked : boolean;

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    theme: "light",
    checked: false,
    disabled: false,
    disableRipple: false,
    required: false,
    label: null,
    name: null,
    id: null,
    labelPosition: "before",
    margin: null,
    size: "fitContent"
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
    
    this.labelPosition === "after" ? "after" : "before";
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

  ngOnInit() {

    this.renderedChecked = this.checked;   

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.required === "") {
      this.required = true;
    } else if (this.required === "false") {
      this.required = false;
    } else if (this.required === "true") {
      this.required = true;
    }

    if (this.disabled === "" || this.disabled === true) {
      this.required = false;
    }
  }

  onValueChange($event: any) {
    this.onChange.emit($event.checked);
    
    if (this.checked === undefined || this.checked === null){
      this.renderedChecked = $event.checked;
    }else{
      $event.source.checked = this.renderedChecked;
      $event.source._checked = this.renderedChecked;
      $event.source._inputElement.nativeElement.checked = this.renderedChecked;
    }
  }

  calculateWidth(margin, size) {
    if (size === "fillParent") {
      return css`
        width: ${this.sizes[size]};
      `;
    }
    return css`
      width: ${this.sizes[size]};
    `;
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
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(
        inputs.margin,
        inputs.size
      )}
      display: inline-flex;
      mat-checkbox {
        width: 100%;
        label.mat-checkbox-layout {
          display: inline-flex;
          align-items: center;
          width: 100%;
          white-space: normal;

          span.mat-checkbox-label {
            width: calc(100% - 50px);
            word-break: break-word;
            ${this.setTextAlign(inputs.labelPosition)}
          }

          .mat-checkbox-inner-container {
            margin: 10px 15px;
            width: 20px;
            height: 20px;

            .mat-checkbox-background,
            .mat-checkbox-frame {
              border-radius: 4px;
            }

            .mat-checkbox-background {
              svg path {
                stroke: black !important;
                stroke-width: 3px;
              }
            }
          }
        }

        &.mat-checkbox-disabled {
          cursor: not-allowed;
        }

        .mat-checkbox-ripple {
          left: calc(50% - 23.3px);
          top: calc(50% - 23.3px);
          height: 46.6px;
          width: 46.6px;
        }

        .mat-ripple-element:not(.mat-checkbox-persistent-ripple) {
          height: 46.6px !important;
          width: 46.6px !important;
          left: 0px !important;
          top: 0px !important;
          opacity: 0.25;
        }

        .mat-checkbox-inner-container:focus .mat-checkbox-persistent-ripple {
          opacity: 0.15;
        }
      }
    `;
  }
}
