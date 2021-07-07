import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'dxc-show-errors',
  template: `
   <ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
   </ul>
 `,
})
export class DxcPageErrorsComponent {

  @Input()
  private control: AbstractControlDirective | AbstractControl;
  @Input() fieldname: string;
  @Input() errormessages: any;
  @Input() gridGlobalRequiredValidation: string;
  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors = (): string[] => {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage());
  }

  private getMessage() {
    if (this.errormessages['validate'+this.fieldname]) {
      return this.errormessages['validate'+this.fieldname];
    }
    else {
      return this.gridGlobalRequiredValidation ;
    }
  }
}
