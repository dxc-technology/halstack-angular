import {
  Component,
  Input,
  Output,
  HostBinding,
  EventEmitter
} from "@angular/core";
@Component({
  selector: "dxc-dialog",
  templateUrl: "./dxc-dialog.component.html",
  styleUrls: [
    "./dxc-dialog.component.scss"
  ]
})
export class DxcDialogComponent{
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() isVisible: boolean;
  @Input() overlay: boolean;
  @Input() isCloseVisible: boolean;
  @Output() onClose = new EventEmitter<any>();


  public ngOnInit() {}

  public ngOnChanges(): void {
    
  }

  public onCloseHandler($event: any): void {
    this.onClose.emit($event);
  }
}
