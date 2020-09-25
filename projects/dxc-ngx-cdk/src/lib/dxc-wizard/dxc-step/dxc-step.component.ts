import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";
import { css } from "emotion";
import { CssUtils } from "../../utils";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "dxc-step",
  templateUrl: "./dxc-step.component.html",
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
  @Input() currentStep: number;

  validIcon = "assets/valid_icon.svg";
  invalidIcon = "assets/invalid_icon.svg";

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    label: null,
    description: null,
    iconSrc: null,
    disabled: false,
    valid: null,
    mode: "horizontal",
    currentStep: 0,
  });

  constructor(private utils: CssUtils) {}

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
        margin: ${inputs.isFirst
          ? inputs.mode === "vertical"
            ? "0 0 25px 0"
            : "0 25px 0 0"
          : inputs.isLast
          ? inputs.mode === "vertical"
            ? "25px 0 0 0"
            : "0 0 0 25px"
          : inputs.mode === "vertical"
          ? "25px 0"
          : "0 25px"};

        padding: 0px;
        ${inputs.disabled ? "cursor: not-allowed;" : ""}

        &:focus {
          padding: 2px;
          outline: -webkit-focus-ring-color auto 1px;
          margin: ${inputs.isFirst
          ? inputs.mode === "vertical"
            ? "1px 1px 25px 1px"
            : "1px 25px 1px 1px"
          : inputs.isLast
          ? inputs.mode === "vertical"
            ? "25px 1px 1px 1px"
            : "1px 1px 1px 25px"
          : inputs.mode === "vertical"
          ? "25px 1px"
          : "1px 25px"};
          outline-color: var(--wizard-focusColor);
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
        width: ${!inputs.isCurrent && !inputs.disabled ? "32px" : "36px"};
        height: ${!inputs.isCurrent && !inputs.disabled ? "32px" : "36px"};

        ${!inputs.isCurrent && !inputs.disabled
          ? `border: 2px solid #000000;`
          : ""}

        ${inputs.disabled
          ? "background: var(--wizard-disabledBackground) 0% 0% no-repeat padding-box;"
          : ""}

        ${inputs.isCurrent &&
        `background: var(--wizard-selectedBackgroundColor) 0% 0% no-repeat padding-box; 
          p {
            color: var(--wizard-selectedFont) !important;
          }`}

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
        color: ${!inputs.isCurrent && !inputs.disabled
          ? "var(--wizard-fontColor)"
          : inputs.isCurrent
          ? "var(--wizard-fontColor)"
          : "var(--wizard-disabledText)"};
        opacity: 1;
        margin: 0;
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
        color: ${inputs.position <= inputs.currentStep
          ? "var(--wizard-fontColor)"
          : "var(--wizard-disabledText)"};
      }

      .label {
        text-align: left;
        font: Normal 16px/22px Open Sans;
        letter-spacing: 0.77px;
        color: inherit;
        ${inputs.position > inputs.currentStep && `opacity: 0.64;`}
        ${inputs.disabled && `opacity: 0.34;`}
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
        border: 1px solid var(--wizard-lineColor);
        opacity: 1;
        flex-grow: 1;
      }
    `;
  }
}
