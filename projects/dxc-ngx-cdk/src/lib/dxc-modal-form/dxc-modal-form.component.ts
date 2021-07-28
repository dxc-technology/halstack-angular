import { Component, ContentChild, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms'

@Component({
  selector: 'dxc-modal-form',
  template: `
   <form id="frmData" name="frmData" tabindex="0" role="form" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-describedby]="ariaDescribedBy"
  [formGroup]="claimsForm" style="height: 100%;"
    [attr.claimsFormDirty]="claimsForm.dirty" #formElm>
    <ng-content></ng-content>
</form>
  `
})
export class DxcModalFormComponent implements OnInit, AfterViewInit {
  @Input('formName') claimsForm: FormGroup;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null;
  @ViewChild('formElm', { read: ElementRef, static: false }) formElm: ElementRef;
  @ContentChild(ControlContainer, { static: true }) formGroup: FormGroup;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.formElm.nativeElement.focus();
    }, 1);
  }

  ngOnInit(): void {
  }

}
