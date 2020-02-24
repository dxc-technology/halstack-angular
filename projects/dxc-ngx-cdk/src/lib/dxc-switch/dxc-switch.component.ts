import {
  Component,
  OnChanges,
  Input,
  Output,
  HostBinding,
  SimpleChanges
} from "@angular/core";
import { EventEmitter, Inject } from '@angular/core';
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: "dxc-switch",
  templateUrl: "./dxc-switch.component.html",
  styleUrls: [
    "./dxc-light-switch.component.scss",
    "./dxc-dark-switch.component.scss"
  ],
  providers: [CssUtils]
})
export class DxcSwitchComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @Input() checked: boolean;
  @Input() value: string;
  @Input() theme: string;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() margin: any;
  @Input() size: any;
  @Output() checkedChange: EventEmitter<any>;

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    theme: "light",
    checked: false,
    disabled: false,
    disableRipple: false,
    required: false,
    label: null,
    name: null,
    id: null,
    labelPosition: "before",
    margin: null,
    size: "medium"
  });

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset"
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.labelPosition === "after" ? "after" : "before";
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils, @Inject('ThemeService') private themeService: ThemeService) {
    this.checkedChange = new EventEmitter();
  }

  onChange(event: any) {
    this.checkedChange.emit(event.checked);
  }

  calculateWidth(margin, size) {
    if (size === "fillParent") {
      return css`
        width: ${this.sizes[size]};
      `;
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  setTextAlign(labelPosition) {
    if (labelPosition === "before") {
      return css`
        text-align: end;
      `;
    }
  }

  setBarColor() {
    const color = this.themeService.getActiveTheme().properties["--darkGrey"] + "66";
    return css`
      background-color: ${color};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs.margin, inputs.size)}
      display: block;
      mat-slide-toggle {
        margin-top: 10px;
        margin-bottom: 10px;
        display: inline-flex;
        width: 100%;
        height: auto;

        div.mat-slide-toggle-thumb {
          height: 24px;
          width: 24px;
          position: absolute;
          top: -3px;
          right: -2px;
        }
        div.mat-slide-toggle-bar {
          height: 12px;
          margin: 15px;
          ${this.setBarColor()}
        }
        span.mat-slide-toggle-content {
          white-space: normal;
          width: calc(100% - 44px);
          ${this.setTextAlign(inputs.labelPosition)}
        }
      }

      .mat-slide-toggle.mat-disabled {
        .mat-slide-toggle-label {
          cursor: not-allowed;
        }
        .mat-slide-toggle-thumb {
          cursor: not-allowed;
        }
      }
    `;
  }
}
