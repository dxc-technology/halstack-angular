import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcWizardStepComponent } from "./dxc-wizard-step/dxc-wizard-step.component";
import { DxcWizardIconComponent } from "./dxc-wizard-icon/dxc-wizard-icon.component";
import { DxcWizardComponent } from "./dxc-wizard.component";

@NgModule({
  declarations: [DxcWizardComponent, DxcWizardStepComponent, DxcWizardIconComponent],
  imports: [CommonModule],
  exports: [DxcWizardComponent, DxcWizardStepComponent, DxcWizardIconComponent],
})
export class DxcWizardModule {}
