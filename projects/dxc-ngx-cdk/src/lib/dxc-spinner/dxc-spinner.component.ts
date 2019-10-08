import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "dxc-spinner",
  templateUrl: "./dxc-spinner.component.html",
  styleUrls: [
    "./dxc-spinner.component.scss",
    "./dxc-light-spinner.component.scss",
    "./dxc-dark-spinner.component.scss"
  ]
})
export class DxcSpinnerComponent {
  mode: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: string;
  @Input() label: string;
  @Input() showValue: boolean = false;
  @Input() overlay: boolean;

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
