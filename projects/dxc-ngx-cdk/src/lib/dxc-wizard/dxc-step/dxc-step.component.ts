import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { css } from "emotion";
import { CssUtils } from '../../utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dxc-step',
  templateUrl: './dxc-step.component.html'
})
export class DxcStepComponent {
  @Input() label: string;
  @Input() description: string;
  @Input() iconSrc: string;
  @Input() disabled: boolean;
  @Input() valid: boolean;

  @Input() position: number;
  @Input() isCurrent: boolean;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;

  @Input() mode: string;
  @Input() theme: string;
  @Input() currentStep: number;

  validIcon = "../../../assets/valid_icon.svg";
  invalidIcon = "../../../assets/invalid_icon.svg";

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    label: null,
    description: null,
    iconSrc: null,
    disabled: false,
    valid: null,
    mode: "horizontal",
    theme: "light",
    currentStep: 0
  });

  constructor(private utils: CssUtils) { }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngDoCheck() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      ${inputs.mode === "vertical" ? "" : "align-items: center;"}
      flex-grow: ${inputs.isLast ? "0" : "1"};
      flex-direction: ${inputs.mode === "vertical" ? "column" : "row"};
      ${inputs.mode === "vertical" ? "width: 100%;" : ""}

      .step {
        border: none;
        background: inherit;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: ${ inputs.isFirst ?
          inputs.mode === "vertical" ? "0 0 25px 0" : "0 25px 0 0"
          : inputs.isLast ? 
          inputs.mode === "vertical" ? "25px 0 0 0" : "0 0 0 25px"
          : inputs.mode === "vertical" ? "25px 0" : "0 25px"
        };

        padding: 0px;
        ${inputs.disabled ? "cursor: not-allowed;" : ""}

        &:focus {
          outline: none;
        }

        &:hover {
          ${inputs.disabled ? "" : "cursor: pointer;"}
        }
      }

      .stepHeader {
        position: relative;
        display: inline-flex;
        padding-bottom: 3px;
      }

      .iconContainer {
        width: ${!inputs.isCurrent ? "32px" : "36px"};
        height: ${!inputs.isCurrent ? "32px" : "36px"};

        ${!inputs.isCurrent && !inputs.disabled ?
          `border: 2px solid ${inputs.theme === "light" ? "#000000" : "#FFFFFF"};` :
          ""}

        ${inputs.disabled ?
          "background: #D9D9D9 0% 0% no-repeat padding-box;" : ""}

        ${inputs.isCurrent ? 
          "background: #FFED00 0% 0% no-repeat padding-box;" : ""}

        border-radius: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .icon {
        width: 19px;
        height: 19px;
      }

      .number {
        font: Normal 16px/22px Open Sans;
        letter-spacing: 0.77px;
        color: ${!inputs.isCurrent && !inputs.disabled ?
          inputs.theme === "light" ? "#000000" : "#FFFFFF"
          : inputs.isCurrent ? "#000000" : "#666666"};
        opacity: 1;
      }

      .validityIcon {
        width: 18px;
        height: 18px;
        position: absolute;
        bottom: 0px;
        right: 0px;
      }

      .infoContainer {
        margin-left: 10px;
        color: ${inputs.theme === "light" ?
          inputs.position <= inputs.currentStep ? "#000000" : "#666666" :
          inputs.position <= inputs.currentStep ? "#FFFFFF" : "#D9D9D9"};
      }

      .label {
        text-align: left;
        font: Normal 16px/22px Open Sans;
        letter-spacing: 0.77px;
        color: inherit;
        margin: 0;
      }

      .description {
        text-align: left;
        font: Normal 12px/17px Open Sans;
        letter-spacing: 0.58px;
        color: inherit;
        margin: 0;
      }

      .stepSeparator {
        width: ${inputs.mode === "horizontal" ? "" : "0"};
        height: ${inputs.mode === "horizontal" ? "0" : ""};
        ${inputs.mode === "vertical" ? "margin: 0 18px;" : ""}
        border: 1px solid #D9D9D9;
        opacity: 1;
        flex-grow: 1;
      }
    `;
  }
}
