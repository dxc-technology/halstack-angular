import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DxcConfirmationDialogComponent } from './dxc-confirmation-dialog.component';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DxcConfirmationDialogService {

  constructor(private dialog: MatDialog) { }
  dialogRef: MatDialogRef<DxcConfirmationDialogComponent>;

  public confirm(options) {
    const dialogwidth = '40vw';
    this.dialogRef = this.dialog.open(DxcConfirmationDialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      },
      ariaLabel: options.title + ' ' + options.message,
      autoFocus: false,
      width: options.dialogwidth ? options.dialogwidth : dialogwidth
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }
    ));
  }


}
