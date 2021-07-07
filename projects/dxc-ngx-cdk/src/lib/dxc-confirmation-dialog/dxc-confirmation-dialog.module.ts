import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcConfirmationDialogComponent } from './dxc-confirmation-dialog.component';
import { DxcConfirmationDialogService } from './dxc-confirmation-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [DxcConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [DxcConfirmationDialogComponent],
  entryComponents: [DxcConfirmationDialogComponent]
})
export class DxcConfirmationDialogModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DxcConfirmationDialogModule,
      providers: [DxcConfirmationDialogService]
    };
  }
}
