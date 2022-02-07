import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcWizardStepComponent } from "./dxc-wizard-step/dxc-wizard-step.component";
import { WizardService } from "./services/wizard.service";
import { ChangeDetectorRef } from "@angular/core";
import { coerceNumberProperty } from "@angular/cdk/coercion";

type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-wizard",
  templateUrl: "./dxc-wizard.component.html",
  providers: [CssUtils, WizardService],
})
export class DxcWizardComponent {
  /**
   * The wizard can be showed in horizontal or vertical.
   */
  @Input() mode: "horizontal" | "vertical" = "horizontal";
  /**
   * Defines which step is marked as the current. The numeration starts in 0.
   */
  @Input() currentStep: number = 0;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Margin | Space;
  /**
   * Value of the tabindex attribute that is given to all the steps.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;
  /**
   * This event will emit in case the user clicks a step. The step
   * number will be passed as a parameter.
   */
  @Output() onStepClick = new EventEmitter<number>();

  @ContentChildren(DxcWizardStepComponent)
  dxcWizardSteps: QueryList<DxcWizardStepComponent>;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    mode: "horizontal",
    currentStep: 0,
    margin: null,
  });

  constructor(
    private cdRef: ChangeDetectorRef,
    private utils: CssUtils,
    private service: WizardService
  ) {}

  ngAfterViewInit(): void {
    this.service.setSteps(this.dxcWizardSteps);
    this.service.newCurrentStep.subscribe((value) => {
      if (value || value === 0) {
        this.handleStepClick(value);
      }
    });
    this.dxcWizardSteps.changes.subscribe(() => {
      this.service.setSteps(this.dxcWizardSteps);
    });
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.service.innerCurrentStep.next(this.currentStep || 0);
    this.service.mode.next(this.mode || "horizontal");
    this.service.tabIndexValue.next(this.tabIndexValue);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.service.innerCurrentStep.next(this.currentStep);
    this.service.mode.next(this.mode || "horizontal");
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    this.cdRef.detectChanges();
  }

  public handleStepClick(i) {
    if (!(this.currentStep || this.currentStep === 0)) {
      this.service.innerCurrentStep.next(i);
    }
    this.onStepClick.emit(i);
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      flex-direction: ${inputs.mode === "vertical" ? "column" : "row"};
      justify-content: center;
      ${inputs.mode === "vertical" ? "height: 500px" : "width: 100%"};
    `;
  }
}
