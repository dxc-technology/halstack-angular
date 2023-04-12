// import { ResourceRequestService } from './services/httpconfiguration/resourcerequest.service';
// import { MessageToast } from './services/toaster/message.component';
// import { MessageService } from './services/toaster/message.service';
import { NgModule, ModuleWithProviders, Input, Pipe } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpcallService } from './services/httpconfiguration/httpcall.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { InterceptorService } from './services/httpconfiguration/interceptor.service';
// import { LoaderService } from './services/spinner/loader.service';
// import { ConfigurationsetupService } from './services/startup/configurationsetup.service';
// import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
// import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  // declarations: [
  //   MessageToast
  // ],
  // entryComponents: [MessageToast],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // MdePopoverModule,
    // ToastrModule.forRoot({ toastComponent: MessageToast }),
    // ToastContainerModule
  ],
  // providers: [HttpcallService,
  //   InterceptorService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: InterceptorService,
  //     multi: true,
  // //   }],
  // exports: [HttpClientModule, MessageToast]
})
export class DxcCommonModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DxcCommonModule,
      // providers: [HttpcallService, LoaderService, MessageService,
      //   ConfigurationsetupService, InterceptorService,
      //   ResourceRequestService]
    };
  }
}
