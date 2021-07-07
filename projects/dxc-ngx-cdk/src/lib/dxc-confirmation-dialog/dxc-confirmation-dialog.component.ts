import { Component, HostListener, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
export interface DialogData {
  cancelText: string,
  confirmText: string,
  message: string,
  title: string
}

@Component({
  selector: 'dxc-confirmation-dialog',
  templateUrl: './dxc-confirmation-dialog.component.html',
  styleUrls: ['./dxc-confirmation-dialog.component.scss']
})
export class DxcConfirmationDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private mdDialogRef: MatDialogRef<DxcConfirmationDialogComponent>) {

   }
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }
}
