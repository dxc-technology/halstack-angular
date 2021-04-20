import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
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
      .iconContainer:not(.current) {
        width: ${!inputs.disabled ? "32px" : "36px"};
        height: ${!inputs.disabled ? "32px" : "36px"};
        ${!inputs.disabled ? `border: 2px solid #000000;` : ""}
        ${inputs.disabled
          ? "background: var(--wizard-disabledBackground) 0% 0% no-repeat padding-box;"
          : ""}
      }
      .current .iconContainer {
        width: 36px;
        height: 36px;
        background: var(--wizard-selectedBackgroundColor) 0% 0% no-repeat
          padding-box;
        p {
          color: var(--wizard-selectedFont) !important;
        }
      }
      .iconContainer {
        border-radius: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .number:not(.current) {
        color: ${!inputs.disabled
          ? "var(--wizard-fontColor)"
          : "var(--wizard-disabledFont)"};
      }
      .current .number {
        color: var(--wizard-fontColor);
      }
      .number {
        font: Normal 16px/22px "Open Sans", sans-serif;
        letter-spacing: 0.77px;
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
      .infoContainer:not(.visited){
        color: var(--wizard-disabledFont);
      }
      .visited .infoContainer{
        color: var(--wizard-fontColor);
      }
      .infoContainer {
        margin-left: 10px;
      }
      .label {
        text-align: left;
        font: Normal 16px/22px "Open Sans", sans-serif;
        letter-spacing: 0.77px;
        color: inherit;
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
