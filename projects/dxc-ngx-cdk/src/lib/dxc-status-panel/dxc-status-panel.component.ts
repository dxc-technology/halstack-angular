import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { css } from 'emotion';
import { BehaviorSubject } from 'rxjs';
import { CssUtils } from "../utils";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'dxc-status-panel',
  templateUrl: './dxc-status-panel.component.html',
  providers: [CssUtils],
})
export class DxcStatusPanelComponent implements OnInit {

  @Input('header') header: string = null;
  @Input('info') info: string = null;
  @Input('infoDescription') infoDescription: string = null;
  @Input('closeButtonLabel') closeButtonLabel: string = 'Close'
  _content: SafeHtml = null;
  _show: boolean = false;

  @Input()
  get content() {
    return this._content;
  }
  set content(value) {
    this._content = this.sanitizer.bypassSecurityTrustHtml(value.toString());
  }

  @Input()
  get show(): boolean {
    return this._show;
  }
  set show(value: boolean) {
    this._show = coerceBooleanProperty(value);
  }

  @Output() onCloseClick = new EventEmitter<any>();

  @ViewChild('dialogboxstart', { read: ElementRef, static: false }) dialogboxstart: ElementRef;
  @ViewChild('dialogboxreturn', { read: ElementRef, static: false }) dialogboxreturn: ElementRef;
  @ViewChild('dialogboxend', { read: ElementRef, static: false }) dialogboxend: ElementRef;

  @HostListener('keydown.escape')
  escape() {
    this.onCloseHandler(true);
  }

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    header: "",
    content: ""
  });

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (changes.show?.currentValue == true && changes.show?.currentValue != changes.show?.previousValue) {
      this.setFocusOnLoad();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setFocusOnLoad();
  }

  setFocusOnLoad() {
    setTimeout(() => {
      if (this.dialogboxstart) {
        this.dialogboxstart.nativeElement.focus();
      }
    }, 1);
  }

  startKeyPress($event: any) {
    if ($event.shiftKey && $event.keyCode == 9 && $event.srcElement == this.dialogboxstart.nativeElement) {
      if (this.dialogboxreturn.nativeElement.focus) {
        this.dialogboxreturn.nativeElement.tabindex = "0";
        this.dialogboxreturn.nativeElement.focus();
      }
    }
  }

  endFocus($event: any) {
    if (this.dialogboxstart.nativeElement.focus)
      this.dialogboxstart.nativeElement.focus();
  }

  returnFocusOut($event: any) {
    this.dialogboxreturn.nativeElement.tabindex = "-1";
  }

  public onCloseHandler($event: any): void {
    this.onCloseClick.emit($event);
  }

  getDynamicStyle(inputs) {
    return css`
    .status-panel {
      height: 100%;
      width: 100%;
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      .status-details {
        position: relative;
        height: 80%;
        width: 80%;
        display: block;
        margin: 5% auto;
      }
      .status-header {
        padding-top: 5px;
        display: inline-block;
        max-width: calc(100% - 80px);
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .container {
        width: 100%;
        height: 100%;
        margin: 0px!important;
        max-width: 100% !important;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
        position: relative;
        z-index: 1;
        background: inherit;
        overflow: hidden;
        padding: 0px;
      }
      .container:before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow:inset 0 0 2000px rgb(255 255 255 / 15%);
        filter: blur(10px);
        margin: -20px;
      }
      .container-bg {
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0px!important;
        max-width: 100% !important;
      }
      .header {
        height: 5%;
        min-height: 20px;
        color: #000;
        border: 1px solid #000;
        font-family: monospace;
        background-color: #f5f5f5;
        white-space: nowrap;
      }
      .content {
        height: calc(100% - 35px);
        font-family: monospace;
        color: #fff;
        padding: 3px;
        overflow: overlay;
      }
      .blink {
        padding-left: 1px;
        font-weight: revert;
        animation: blink-animation 1.5s steps(3, start) infinite;
        -webkit-animation: blink-animation 1.5s steps(3, start) infinite;
      }
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
      @-webkit-keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
    }`;
  }
}
