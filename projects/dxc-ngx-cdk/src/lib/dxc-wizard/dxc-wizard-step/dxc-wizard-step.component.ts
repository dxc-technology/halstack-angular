import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { DxcWizardIconComponent } from "../dxc-wizard-icon/dxc-wizard-icon.component";
import { WizardService } from "../services/wizard.service";

@Component({
  selector: "dxc-wizard-step",
  templateUrl: "./dxc-wizard-step.component.html",
})
export class DxcWizardStepComponent {
  @Input() label: string;
  @Input() description: string;
  @Input() disabled: boolean;
  @Input() valid: boolean;

  //Props controlled by father component
  @Input() position: number = 0;
  @Input() isCurrent: boolean;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() childCurrentStep: number;

  @ContentChildren(DxcWizardIconComponent)
  dxcWizardIcon: QueryList<DxcWizardIconComponent>;

  validIcon = "assets/valid_icon.svg";
  invalidIcon = "assets/invalid_icon.svg";
  containsIcon = false;
  mode: string = "horizontal";

  @HostBinding("class") className;
  @HostBinding('class.current') get validCurrent() { return this.isCurrent; }

  defaultInputs = new BehaviorSubject<any>({
    label: null,
    description: null,
    disabled: false,
    valid: null,
    childCurrentStep: 0,
    position: 0
  });

  constructor(
    private cdRef: ChangeDetectorRef,
    private service: WizardService
  ) {
    this.service.mode.subscribe((value) => {
      if (value) {
        this.mode = value;
      }
    });
  }

  ngOnInit() {
    this.defaultInputs.next({
      ...this.defaultInputs.getValue(),
      mode: this.mode,
    });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterViewInit(): void {
    this.containsIcon = this.dxcWizardIcon.length !== 0;
   
    this.cdRef.detectChanges();
  }

  public setIsLast(value: boolean): void {
    this.isLast = value;
    this.cdRef.detectChanges();
  }

  public setIsCurrent(value: boolean): void {
    console.log("setIsCurrent", value);
    this.isCurrent = value;
    this.defaultInputs.next({
      ...this.defaultInputs.getValue(),
      isCurrent: value,
    });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.cdRef.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({
      ...this.defaultInputs.getValue(),
      ...inputs,
      mode: this.mode,
    });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public handleStepClick() {
    if (this.position || this.position === 0) {
      console.log(this.position);
      this.service.newCurrentStep.next(this.position);
    }
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

      .number {
        font: Normal 16px/22px "Open Sans", sans-serif;
        letter-spacing: 0.77px;
        color: ${!inputs.isCurrent && !inputs.disabled
          ? "var(--wizard-fontColor)"
          : inputs.isCurrent
          ? "var(--wizard-fontColor)"
          : "var(--wizard-disabledFont)"};
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
        color: ${inputs.position <= inputs.childCurrentStep
          ? "var(--wizard-fontColor)"
          : "var(--wizard-disabledFont)"};
      }

      .label {
        text-align: left;
        font: Normal 16px/22px "Open Sans", sans-serif;
        letter-spacing: 0.77px;
        color: inherit;
        ${inputs.position > inputs.childCurrentStep &&
        `opacity: var(--wizard-notVisitedOpacity);`}
        ${inputs.disabled && `opacity: var(--wizard-disabled);`}
        margin: 0;
      }

      .description {
        text-align: left;
        font: Normal 12px/17px "Open Sans", sans-serif;
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
