import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
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
import { WizardStepProperties } from "./dxc-wizard-step.types";

@Component({
  selector: "dxc-wizard-step",
  templateUrl: "./dxc-wizard-step.component.html",
})
export class DxcWizardStepComponent {
  /**
   * Step label.
   */
  @Input() label: string;
  /**
   * Description that will be placed next to the step.
   */
  @Input() description: string;
  /**
   * Whether the step is disabled or not.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  /**
   * Whether the step is valid or not.
   */
  @Input()
  get valid(): boolean {
    return this._valid;
  }
  set valid(value: boolean) {
    this._valid = coerceBooleanProperty(value);
  }
  private _valid;

  //Props controlled by father component
  public position: number = 0;
  public isFirst: boolean;
  public isLast: boolean;
  public isCurrent: boolean = false;
  public mode: string = "horizontal";
  public isVisited: boolean = false;
  public tabIndexValue: number = 0;

  @ContentChildren(DxcWizardIconComponent)
  dxcWizardIcon: QueryList<DxcWizardIconComponent>;

  validIcon = "assets/valid_icon.svg";
  invalidIcon = "assets/invalid_icon.svg";
  containsIcon = false;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<WizardStepProperties>({
    label: null,
    description: null,
    disabled: false,
    valid: null,
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
    this.service.tabIndexValue.subscribe((value) => {
      if (value) {
        this.tabIndexValue = value;
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

  public setIsCurrent(value: boolean, newCurrent: number): void {
    this.isCurrent = value;
    this.position <= newCurrent
      ? (this.isVisited = true)
      : (this.isVisited = false);
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
      this.service.newCurrentStep.next(this.position);
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      ${inputs.mode === "vertical" ? "" : "align-items: center;"}
      flex-grow: 1;
      flex-direction: ${inputs.mode === "vertical" ? "column" : "row"};
      ${inputs.mode === "vertical" ? "width: 100%;" : ""}
      .last {
        flex-grow: 0;
        margin: ${inputs.mode === "vertical"
          ? "24px 0 0 0"
          : "0 0 0 24px"} !important;
        &:focus {
          margin: ${inputs.mode === "vertical"
            ? "24px 0px 0px 0px"
            : "0px 0px 0px 24px"} !important;
        }
      }
      .first {
        margin: ${inputs.mode === "vertical"
          ? "0 0 24px 0"
          : "0 24px 0 0"} !important;
        &:focus {
          margin: ${inputs.mode === "vertical"
            ? "0px 0px 24px 0px"
            : "0px 24px 0px 0px"} !important;
        }
      }
      .step {
        border: none;
        background: inherit;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: ${inputs.mode === "vertical" ? "24px 0" : "0 24px"};
        padding: 0px;
        ${inputs.disabled ? "cursor: not-allowed;" : ""}
        margin: ${inputs.mode === "vertical" ? "24px 1px" : "1px 24px"};
        &:focus {
          outline: var(--wizard-focusColor) auto 1px;
          outline-offset: 2px;
        }
        &:hover {
          ${inputs.disabled ? "" : "cursor: pointer;"}
        }
      }
      .stepHeader {
        position: relative;
        display: inline-flex;
        padding-bottom: 4px;
      }
      svg,
      img {
        width: var(--wizard-stepContainerIconSize);
        height: var(--wizard-stepContainerIconSize);
        vertical-align: middle;
      }
      .iconContainer:not(.current) {
        width: var(--wizard-circleWidth);
        height: var(--wizard-circleHeight);
        border: var(--wizard-circleBorderThickness)
          var(--wizard-circleBorderStyle) var(--wizard-circleBorderColor);
        border-radius: var(--wizard-circleBorderRadius);
        background: var(--wizard-stepContainerBackgroundColor);
      }
      .current .iconContainer {
        width: var(--wizard-selectedCircleWidth);
        height: var(--wizard-selectedCircleHeight);
        border: var(--wizard-selectedCircleBorderThickness)
          var(--wizard-selectedCircleBorderStyle)
          var(--wizard-selectedCircleBorderColor);
        border-radius: var(--wizard-selectedCircleBorderRadius);
        background: var(--wizard-stepContainerSelectedBackgroundColor);
        .number {
          color: var(--wizard-stepContainerSelectedFontColor) !important;
        }
        svg,
        img {
          fill: var(--wizard-stepContainerSelectedFontColor);
        }
      }
      .iconContainer {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .disabled {
        .iconContainer {
          background: var(--wizard-disabledBackgroundColor);
          color: var(--wizard-disabledFontColor);
          width: var(--wizard-disabledCircleWidth);
          height: var(--wizard-disabledCircleHeight);
          border: var(--wizard-disabledCircleBorderThickness)
            var(--wizard-disabledCircleBorderStyle)
            var(--wizard-disabledCircleBorderColor);
          border-radius: var(--wizard-disabledCircleBorderRadius);
        }
        .number {
          color: var(--wizard-disabledFontColor);
        }
        .infoContainer .label,
        .infoContainer .description {
          color: var(--wizard-disabledFontColor);
        }
      }
      .number {
        color: var(--wizard-stepContainerFontColor);
        font-family: var(--wizard-stepContainerFontFamily);
        font-weight: var(--wizard-stepContainerFontWeight);
        font-style: var(--wizard-stepContainerFontStyle);
        letter-spacing: var(--wizard-stepContainerLetterSpacing);
        font-size: var(--wizard-stepContainerFontSize);
        opacity: 1;
        margin: 0;
      }
      .validityIcon {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 22.5px;
        left: 22.5px;
      }
      .infoContainer {
        margin-left: 12px;
      }
      :not(.visited) .label {
        color: var(--wizard-labelFontColor);
      }
      .visited .infoContainer .label {
        color: var(--wizard-visitedLabelFontColor);
      }
      .label {
        text-align: var(--wizard-labelTextAlign);
        text-transform: var(--wizard-labelFontTextTransform);
        font-size: var(--wizard-labelFontSize);
        font-family: var(--wizard-labelFontFamily);
        font-weight: var(--wizard-labelFontWeight);
        font-style: var(--wizard-labelFontStyle);
        letter-spacing: var(--wizard-labelLetterSpacing);
        margin: 0;
      }
      :not(.visited) .description {
        color: var(--wizard-descriptionFontColor);
      }
      .visited .infoContainer .description {
        color: var(--wizard-visitedDescriptionFontColor);
      }
      .description {
        text-align: var(--wizard-descriptionTextAlign);
        text-transform: var(--wizard-descriptionFontTextTransform);
        font-size: var(--wizard-descriptionFontSize);
        font-family: var(--wizard-descriptionFontFamily);
        font-weight: var(--wizard-descriptionFontWeight);
        font-style: var(--wizard-descriptionFontStyle);
        letter-spacing: var(--wizard-descriptionLetterSpacing);
        margin: 0;
      }
      .stepSeparator {
        width: ${inputs.mode === "horizontal" ? "" : "0"};
        height: ${inputs.mode === "horizontal" ? "0" : ""};
        ${inputs.mode === "vertical" ? "margin: 0 18px;" : ""}
        border: var(--wizard-separatorBorderThickness) var(--wizard-separatorBorderStyle) var(--wizard-separatorColor);
        opacity: 1;
        flex-grow: 1;
      }
    `;
  }
}
