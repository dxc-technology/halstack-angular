import { Injectable, QueryList } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DxcWizardStepComponent } from "../dxc-wizard-step/dxc-wizard-step.component";

@Injectable({
  providedIn: "root",
})
export class WizardService {
  public steps: QueryList<DxcWizardStepComponent> = undefined;
  public innerCurrentStep: BehaviorSubject<number> = new BehaviorSubject(
    undefined
  );
  public newCurrentStep: BehaviorSubject<number> = new BehaviorSubject(
    undefined
  );
  public mode: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public tabIndexValue: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.innerCurrentStep.subscribe((newCurrent: number) => {
      if (this.steps && (newCurrent || newCurrent === 0)) {
        this.steps.forEach((element: DxcWizardStepComponent, index: number) => {
          element.setIsCurrent(index === newCurrent, newCurrent);
        });
      }
    });
  }

  public setSteps(steps: QueryList<DxcWizardStepComponent>): void {
    this.steps = steps;
    if (this.steps) {
      this.steps.forEach((element, index) => {
        element.isFirst = index === 0;
        element.setIsLast(index === this.steps.length - 1);
        element.position = index;
        element.setIsCurrent(
          index === this.innerCurrentStep.value,
          this.innerCurrentStep.value
        );
      });
    }
  }
}
