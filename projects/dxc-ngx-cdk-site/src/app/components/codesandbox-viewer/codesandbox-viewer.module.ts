import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CodesandboxViewer } from './codesandbox-viewer.component';
import { CodesandboxServiceService } from '../../service/codesandbox-service.service';
import { DxcHeadingModule } from '@dxc-technology/halstack-angular';

@NgModule({
    declarations: [
        CodesandboxViewer
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        DxcHeadingModule
    ],
    exports: [
        CodesandboxViewer
    ],
    providers: [
        CodesandboxServiceService
    ]
})
export class CodesandboxViewerModule { }
