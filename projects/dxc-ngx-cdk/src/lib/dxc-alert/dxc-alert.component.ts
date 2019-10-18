import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
@Component({
  selector: "dxc-alert",
  templateUrl: "./dxc-alert.component.html",
  styleUrls: [
    "./dxc-alert.component.scss"
  ]
})
export class DxcAlertComponent implements OnChanges {

  @Input() isVisible: boolean;
  @Input() type: string = "info";
  @Input() mode: string = "inline"
  @Input() inlineText: string;
  @Output() onClose = new EventEmitter<any>();

  @ViewChild('contents', {static: false}) content:ElementRef;


  public ngOnInit() {}

  public ngOnChanges(): void {
    
  }

  public onCloseHandler($event: any): void {
    this.onClose.emit($event);
  }

  ngAfterViewChecked() {
    if(this.content && this.content.nativeElement && this.content.nativeElement.children.length > 0){
      this.content.nativeElement.classList.add('content');
    }
  }
}
