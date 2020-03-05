import {
  Component,
  OnInit,
  Input,
  HostBinding,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-spinner",
  templateUrl: "./dxc-spinner.component.html",
  styleUrls: [
    "./dxc-spinner.component.scss",
    "./dxc-light-spinner.component.scss",
    "./dxc-dark-spinner.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcSpinnerComponent {
  type: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: number;
  @Input() label: string;
  @Input() showValue: boolean = false;
  @Input() overlay: boolean;
  @Input() mode: string = "large";
  @Input() margin: any;
  
  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @HostBinding("class.overlay") isOverlayed: boolean = false;
  @HostBinding("class.small") isSmall: boolean = false;
  @HostBinding("class.large") isLarge: boolean = true;

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    showValue: false,
    mode: "large"
  });

  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if (this.value || this.value === 0) {
      if (this.value <= 100 && this.value >= 0) {
        this.type = "determinate";
      } else {
        if(this.value > 100) {
          this.type = "determinate";
          this.value = 100;
        } else if(this.value < 0){
          this.type = "determinate";
          this.value = 0;
        } else {
          this.value = undefined;
          this.type = "indeterminate";
        }
      }
    } else {
      this.type = "indeterminate";
    }
    if (this.mode === "overlay") {
      this.isOverlayed = true;
      this.isLarge = false;
      this.isSmall = false;
    } else if (this.mode === "small") {
      this.isOverlayed = false;
      this.isLarge = false;
      this.isSmall = true;
    } else if (this.mode === "large") {
      this.isOverlayed = false;
      this.isLarge = true;
      this.isSmall = false;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.value) {
      this.type = "determinate";
    }
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
    `;
  }
}
