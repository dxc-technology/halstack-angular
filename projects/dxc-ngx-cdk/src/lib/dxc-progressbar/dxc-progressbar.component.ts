import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-progressbar",
  templateUrl: "./dxc-progressbar.component.html",
  styleUrls: [
    "./dxc-progressbar.component.scss",
    "./dxc-light-progressbar.component.scss",
    "./dxc-dark-progressbar.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcProgressbarComponent {
  mode: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: number;
  @Input() label: string;
  @Input() showValue: boolean;
  @Input() overlay: boolean = false;
  @Input() margin: any;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;
  @HostBinding("class.absolute") isAbsolute: boolean = false;

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
        this.mode = "determinate";
      } else {
        if (this.value > 100) {
          this.mode = "determinate";
          this.value = 100;
        } else if (this.value < 0) {
          this.mode = "determinate";
          this.value = 0;
        } else {
          this.value = undefined;
          this.mode = "indeterminate";
        }
      }
    } else {
      this.mode = "indeterminate";
    }
    if (this.overlay === true) {
      this.isAbsolute = true;
    } else {
      this.isAbsolute = false;
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
      this.mode = "determinate";
    }
  }
  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      .backOverlay {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: fixed;
          opacity: 1;
          ${inputs.overlay
            ? css`
                background-color: rgba(0, 0, 0, 0.7);
              `
            : css`
                background-color: transparent;
              `}
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }
    `;
  }
}
