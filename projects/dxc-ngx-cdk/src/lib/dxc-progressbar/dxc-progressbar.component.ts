import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "dxc-progressbar",
  templateUrl: "./dxc-progressbar.component.html",
  styleUrls: [
    "./dxc-progressbar.component.scss",
    "./dxc-light-progressbar.component.scss",
    "./dxc-dark-progressbar.component.scss"
  ]
})
export class DxcProgressbarComponent {
  mode: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: string;
  @Input() label: string;
  @Input() showValue: boolean;
  @Input() overlay: boolean = false;

  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if (this.value) {
      this.mode = "determinate";
    }  else if(this.value === "") {
      this.mode = "indeterminate";
    }
  }

  public ngOnInit(): void {
    if (this.value) {
      this.mode = "determinate";
    }
  }
}
