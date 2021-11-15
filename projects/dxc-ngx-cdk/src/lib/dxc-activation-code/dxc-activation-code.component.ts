import { DxcActivationcodeService } from './dxc-activationcode.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ConfigurationsetupService } from '../services/startup/configurationsetup.service';

interface IActivateCode {
  value: boolean;
  activationCode: string;
  moduleName: string;
}

@Component({
  selector: 'dxc-activationcode',
  templateUrl: './dxc-activation-code.component.html',
  styleUrls: ['./dxc-activation-code.component.scss'],
  providers: [DxcActivationcodeService]
})
export class DxcActivationcodeComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() isCloseVisible: true;
  @Input() value: false;
  @Input('notetext') noteText = '';
  @Output() onClose: EventEmitter<IActivateCode>;
  public licenceActivationForm: FormGroup;

  isInvlaidCode = false;
  suffixIcon = '../assets/images/visibility-black-18dp.svg';
  activationCode: IActivateCode = { value: true, activationCode: '', moduleName: '' };
  loadSpinner = false;

  @ViewChild('activationdialog', { read: ElementRef, static: false }) field: ElementRef;
  globalResource: { [key: string]: { description: string, type: string } };

  constructor(private helper: DxcActivationcodeService, private fb: FormBuilder, private config: ConfigurationsetupService) {
    this.onClose = new EventEmitter<IActivateCode>();
  }

  ngOnInit() {
    this.licenceActivationForm = this.fb.group({
      activationCodeVal: ['', Validators.required]
    });
    this.globalResource = this.config.configservice.Resources;
    this.activationCode.moduleName = this.name;
    this.activationCode.value = this.value;
  }

  closeActivationDialog = () => {
    this.suffixIcon = '../assets/images/visibility-black-18dp.svg';
    this.activationCode.activationCode = '';
    this.activationCode.value = false;
    this.onClose.emit(this.activationCode);
  }

  activationCodeBlurEvent = (value) => {
    let el = this.field.nativeElement.querySelector('.suffixElement');

    if (this.licenceActivationForm.invalid || !this.licenceActivationForm.controls.activationCodeVal.valid) {
      return false;
    }

    if (this.licenceActivationForm.controls['activationCodeVal'].value !== undefined &&
      this.licenceActivationForm.controls['activationCodeVal'].value !== '') {
      this.loadSpinner = true;
      this.activationCode.activationCode = this.licenceActivationForm.controls['activationCodeVal'].value;
      this.helper.activateModuleLicence(this.activationCode).subscribe((response) => {
        this.loadSpinner = false;
        response.activationCode = this.activationCode.activationCode;
        if (response !== undefined && response.isValidCode) {
          this.onClose.emit(response);
          this.isInvlaidCode = false;
        } else {
          this.isInvlaidCode = true;
        }
      });
    } else {
      this.closeActivationDialog();
    }
  }



  get activationCodeCtrl() {
    return this.licenceActivationForm.get('activationCodeVal');
  }

}
