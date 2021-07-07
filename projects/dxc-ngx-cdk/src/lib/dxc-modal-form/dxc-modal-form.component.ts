import { Component, ContentChild, OnInit, AfterContentInit, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms'

@Component({
  selector: 'dxc-modal-form',
  template: `
   <form id="frmData" name="frmData" aria-describedby="header1"
  [formGroup]="claimsForm" style="height: 100%;"
    [attr.claimsFormDirty]="claimsForm.dirty">
    <ng-content></ng-content>
</form>
  `
})
export class DxcModalFormComponent implements OnInit {
  @Input('formName') claimsForm: FormGroup;
  @ContentChild(ControlContainer, { static: true }) formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
