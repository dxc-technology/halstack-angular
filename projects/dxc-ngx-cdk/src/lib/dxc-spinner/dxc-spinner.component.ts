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
  type: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: string;
  @Input() label: string;
  @Input() showValue: boolean = false;
  @Input() overlay: boolean;
  @Input() mode: string = "large";

  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @HostBinding("class.overlay") isOverlayed: boolean = false;
  @HostBinding("class.small") isSmall: boolean = false;
  @HostBinding("class.large") isLarge: boolean = true;

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if (this.value) {
      this.type = "determinate";
    }  else if(this.value === "") {
      this.type = "indeterminate";
    }
    if(this.mode === "overlay") {
      this.isOverlayed = true;
      this.isLarge = false;
      this.isSmall = false;
    } else if(this.mode === "small"){
      this.isOverlayed = false;
      this.isLarge = false;
      this.isSmall = true;
    } else if(this.mode === "large") {
      this.isOverlayed = false;
      this.isLarge = true;
      this.isSmall = false;
    }
  }

  public ngOnInit(): void {
    if (this.value) {
      this.type = "determinate";
    }
  }
}
