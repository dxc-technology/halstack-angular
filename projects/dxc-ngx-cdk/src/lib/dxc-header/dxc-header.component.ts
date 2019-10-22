import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output, 
  EventEmitter
} from "@angular/core";
@Component({
  selector: "dxc-header",
  templateUrl: "./dxc-header.component.html",
  styleUrls: [
    "./dxc-header.component.scss",
    "./dxc-light-header.scss",
    "./dxc-dark-header.scss"
  ]
})
export class DxcHeaderComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() public theme: string = "light";
  @Input() public underline= false;
  @Input() public logoSrc: string;

  @Output() onClick = new EventEmitter<any>();

  public ngOnInit() {}

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true; 
      this.isDark = false;
    }
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event)
  }
}
