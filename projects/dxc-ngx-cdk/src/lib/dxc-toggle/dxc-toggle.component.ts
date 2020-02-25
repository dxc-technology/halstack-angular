import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  styleUrls: [
    "./dxc-light-toggle.component.scss",
    "./dxc-dark-toggle.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcToggleComponent implements OnChanges {
  @Input() mode: string;
  @Input() theme: string;
  @Input() disabled: boolean = false;
  @Input() disableRipple: boolean = false;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string = "before";
  @Input() selected: boolean;

  @Input() margin: any;
  @Input() size: string;

  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<any>({
    mode: "basic",
    theme: "light",
    disabled: false,
    disableRipple: false,
    label: "",
    iconSrc: "",
    iconPosition: "before",
    selected: false
  });

  constructor(private utils: CssUtils) {}

  public ngOnInit() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.iconPosition === "after" ? "after" : "before";

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  sizes = {
    small: "42px",
    medium: "120px",
    large: "240px",
    fillParent: "100%",
    fitContent: "unset"
  };

  setPadding(size) {
    if (size === "small") {
      return css`
        padding: 11px;
      `;
    }
    return css`
      padding: 12px 30px;
    `;
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      mat-button-toggle {
        ${this.calculateWidth(inputs)}
        ${this.utils.getMargins(inputs.margin)}
        white-space: normal;
        .mat-button-toggle-button {
          display: flex;
          justify-content: center;
        }
        &.mat-button-toggle-disabled {
          opacity: 0.5;
          .mat-button-toggle-button {
            cursor: not-allowed;
          }
        }
        &.basic {
          border: none;
          height: 43px;
          .mat-button-toggle-button {
            ${this.setPadding(inputs.size)}
          }
        }
        &.outlined {
          border: 2px solid;
          height: 39px;
          .mat-button-toggle-button {
            ${this.setPadding(inputs.size)}
          }
        }

        .mat-button-toggle-label-content {
          line-height: 1;
          padding: 0px;
        }

        span.content {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-family: "Open Sans", sans-serif;
          text-transform: uppercase;
          flex-direction: ${inputs.iconPosition === "after"
            ? "row-reverse"
            : "row"};
          &.icon-before {
            img.spaced {
              margin-right: 15px;
            }
          }
          &.icon-after {
            img.spaced {
              margin-left: 15px;
            }
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    `;
  }
}
