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

@Component({
  selector: "dxc-wizard",
  templateUrl: "./dxc-wizard.component.html",
  providers: [CssUtils, WizardService],
})
export class DxcWizardComponent {
  @Input() mode: string = "horizontal";
  @Input() currentStep: number;
  @Input() margin: any;
  @Output() onStepClick = new EventEmitter<any>();

  @ContentChildren(DxcWizardStepComponent)
  dxcWizardSteps: QueryList<DxcWizardStepComponent>;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    mode: "horizontal",
    currentStep: null,
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

      svg,
      img {
        width: 19px;
        height: 19px;
        vertical-align: middle;
      }

      dxc-wizard-step {
        :not(.current, .disabled) {
          .iconContainer {
            width: 32px;
            height: 32px;
            border: 2px solid #000000;
          }
          .number {
            color: var(--wizard-fontColor);
          }
        }

        .current,
        .disabled {
          .iconContainer {
            width: 36px;
            height: 36px;
            border: none;
          }
        }

        .current {
          .iconContainer {
            background: var(--wizard-selectedBackgroundColor);
            color: var(--wizard-selectedFont);
          }
          .number {
            color: var(--wizard-fontColor);
          }
          .label, .description {
            color: black;
          }
        }

        .disabled {
          .iconContainer {
            background: var(--wizard-disabledBackground);
            color: var(--wizard-disabledFont);
          }
          .number {
            color: var(--wizard-disabledFont);
          }
        }
      }
    `;
  }
}
