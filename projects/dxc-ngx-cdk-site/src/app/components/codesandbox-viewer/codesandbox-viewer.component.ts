import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { CodesandboxServiceService } from '../../service/codesandbox-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'codesandbox-viewer',
    templateUrl: './codesandbox-viewer.component.html'
})
export class CodesandboxViewer implements OnInit {

    @Input()
    path: string;

    examples;

    subscriptor: any;


    constructor(private codesandboxService: CodesandboxServiceService, protected _sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        console.log('On init in CodesandboxViewer');
        this.subscriptor = this.codesandboxService.getExamples(this.path).subscribe(resp => this.examples = resp);
    }

    getMargin(isFirst: boolean) {
        return isFirst ? { bottom: 'medium' } : { top: 'medium', bottom: 'medium' };
    }

    OnDestroy() {
        console.log('On destroy in CodesandboxViewer');

        this.subscriptor.unsubscribe();
    }
}
