import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcStepComponent } from './dxc-step/dxc-step.component';
import { DxcWizardComponent } from './dxc-wizard.component';



@NgModule({
  declarations: [DxcWizardComponent, DxcStepComponent],
  imports: [
    CommonModule
  ],
  exports: [DxcWizardComponent, DxcStepComponent]
})
export class DxcWizardModule { }
