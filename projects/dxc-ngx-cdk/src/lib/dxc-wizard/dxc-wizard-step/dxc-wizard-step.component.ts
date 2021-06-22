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

@Component({
  selector: "dxc-wizard-step",
  templateUrl: "./dxc-wizard-step.component.html",
})
export class DxcWizardStepComponent {
  @Input() label: string;
  @Input() description: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
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

  defaultInputs = new BehaviorSubject<any>({
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
          ? "25px 0 0 0"
          : "0 0 0 25px"} !important;
        &:focus {
          margin: ${inputs.mode === "vertical"
            ? "25px 1px 1px 1px"
            : "1px 1px 1px 25px"} !important;
        }
      }
      .first {
        margin: ${inputs.mode === "vertical"
          ? "0 0 25px 0"
          : "0 25px 0 0"} !important;
        &:focus {
          margin: ${inputs.mode === "vertical"
            ? "1px 1px 25px 1px"
            : "1px 25px 1px 1px"} !important;
        }
      }
      .step {
        border: none;
        background: inherit;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: ${inputs.mode === "vertical" ? "25px 0" : "0 25px"};
        padding: 0px;
        ${inputs.disabled ? "cursor: not-allowed;" : ""}
        outline-color: var(--wizard-focusColor);
        &:focus {
          padding: 2px;
          outline: -webkit-focus-ring-color auto 1px;
          margin: ${inputs.mode === "vertical" ? "25px 1px" : "1px 25px"};
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
        width: var(--wizard-circleSelectedWidth);
        height: var(--wizard-circleSelectedHeight);
        border: var(--wizard-circleSelectedBorderThickness)
          var(--wizard-circleSelectedBorderStyle)
          var(--wizard-circleSelectedBorderColor);
        border-radius: var(--wizard-circleSelectedBorderRadius);
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
          width: var(--wizard-circleDisabledWidth);
          height: var(--wizard-circleDisabledHeight);
          border: var(--wizard-circleDisabledBorderThickness)
            var(--wizard-circleDisabledBorderStyle)
            var(--wizard-circleDisabledBorderColor);
          border-radius: var(--wizard-circleDisabledBorderRadius);
        }
        .number {
          color: var(--wizard-disabledFontColor);
        }
        .infoContainer .label, .infoContainer .description {
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
        bottom: 0px;
        right: 0px;
      }
      .infoContainer {
        margin-left: 10px;
      }
      :not(.visited) .label {
        color: var(--wizard-labelFontColor);
      }
      .visited .infoContainer .label {
        color: var(--wizard-labelActiveFontColor);
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
        color: var(--wizard-descriptionActiveFontColor);
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
