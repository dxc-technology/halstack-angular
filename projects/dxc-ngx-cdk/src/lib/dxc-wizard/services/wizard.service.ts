import { Injectable, QueryList } from "@angular/core";
import { truncate } from "fs";
import { BehaviorSubject, Observable } from "rxjs";
import { DxcWizardStepComponent } from "../dxc-wizard-step/dxc-wizard-step.component";

@Injectable({
  providedIn: "root",
})
export class WizardService {
  constructor() {
    this.innerCurrentStep.subscribe((newCurrent) => {
      if (this.steps) {
        this.steps.forEach((element, index) => {
          element.isCurrent = index === newCurrent;
        });
      }
    });
  }

  public steps: QueryList<DxcWizardStepComponent> = undefined;
  public innerCurrentStep: BehaviorSubject<number> = new BehaviorSubject(
    undefined
  );
  public newCurrentStep: BehaviorSubject<number> = new BehaviorSubject(
    undefined
  );

  public setSteps(steps: QueryList<DxcWizardStepComponent>): void {
    this.steps = steps;
    if (this.steps) {
      this.steps.forEach((element, index) => {
        element.isFirst = index === 0;
        //element.isLast = index === this.steps.length - 1;
        element.setIsLast(index === this.steps.length - 1);
        element.position = index + 1;
        element.isCurrent = index === this.innerCurrentStep.value;
      });
    }
  }
}
