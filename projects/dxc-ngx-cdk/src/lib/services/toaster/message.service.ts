import { ConfigurationsetupService } from './../startup/configurationsetup.service';
import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  toasterTime = 2000;
  constructor(
    private toastr: ToastrService,
    private config: ConfigurationsetupService

  ) {

  }

  Success(message: string, header?: string) {
    this.toastr.success(message, header, {
      timeOut: parseInt(this.config.configservice.Settings.toasterDisplayTime, 0),
      positionClass: 'toast-bottom-right',
    });
  }

  Error(message: string, header?: string, source?: string) {
    var toasterDisplayTime = "2000";

    let activeToast = this.toastr.error(message, header, {
      disableTimeOut: true,
      positionClass: 'toast-top-full-width',

    });
    activeToast.onHidden.subscribe((response) => {
      try {
        if (window.document.getElementById(source) != null) {
          if (window.document.getElementById(source).getElementsByTagName('input')[0] != undefined) {
            window.document.getElementById(source).getElementsByTagName('input')[0].focus();
          }
          else {
            window.document.getElementById(source).focus();
          }
        }
      } catch (ex) {
        console.log(ex);
      }

    })
  }

  Warning(message: string, header?: string) {
    this.toastr.warning(message, header, {
      disableTimeOut: true,
      positionClass: 'toast-top-full-width',
    });
  }

  Info(message: string, header?: string) {
    this.toastr.info(message, header, {
      timeOut: parseInt(this.config.configservice.Settings.toasterDisplayTime, 0),
      positionClass: 'toast-bottom-right',
    });
  }

  Clear(toastId?: number) {
    this.toastr.clear(toastId);
  }

  private Custom(message: string) {
  }
}
