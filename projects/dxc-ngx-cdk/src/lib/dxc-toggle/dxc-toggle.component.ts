import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges
} from "@angular/core";
@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  styleUrls: ["./dxc-toggle.component.scss",
  "./dxc-light-toggle.component.scss",
  "./dxc-dark-toggle.component.scss"]
})
export class DxcToggleComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() mode: string;
  @Input() theme: string;
  @Input() disabled: boolean = false;
  @Input() disableRipple: boolean = false;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string = "before";
  @Input() selected: boolean;

  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

  public ngOnInit() {
    
  }

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.iconPosition === "after" ? "after" : "before";
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }
}
