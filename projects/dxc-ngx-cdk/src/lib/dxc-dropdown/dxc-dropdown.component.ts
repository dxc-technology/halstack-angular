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
  selector: "dxc-dropdown",
  templateUrl: "./dxc-dropdown.component.html",
  styleUrls: [
    "./dxc-dropdown.component.scss",
    "./dxc-light-dropdown.scss",
    "./dxc-dark-dropdown.scss"
  ],
  providers: [CssUtils]
})
export class DxcDropdownComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() public theme: string = "light";
  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public disableRipple: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public optionsIconPosition: string = "before";
  @Input() public mode: string = "basic";
  @Input() public margin: any;
  @Input() public padding: any;

  @Input() public showCaret: boolean = true;

  @Input() public iconSrc: string;
  @Input() public label: string = "";
  @Output() public selectOption: EventEmitter<any> = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    options: null,
    disabled: false,
    disableRipple: false,
    name: null,
    iconPosition: "before",
    optionsIconPosition: "before",
    mode: "basic",
    showCaret: true,
    iconSrc: null,
    label: null,
    margin: null,
    padding: null
  });

  public onlyHasIcons: boolean;
  public arrowClass: string = "down";
  public menuOpened: string = "closed";

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.hasOptionsOnlyIcons();
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public isMenuOpened() {
    this.arrowClass = this.arrowClass === "down" ? "up" : "down";
    this.menuOpened = this.menuOpened === "opened" ? "closed" : "opened";
  }
  public selectedOption(option: any): void {
    this.selectOption.emit(option.value);
  }

  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        option => option.iconSrc && !option.label
      );
    }
  }
  getDynamicStyle(inputs) {
    return css`
      margin: 15px;
      display: inline-flex;
      align-items: center;
      .icon-before {
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
      .icon-after {
        img {
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
      opacity: 1;
      .menu-buttom-label {
        font-size: 16px;
        width: 83px;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        letter-spacing: 0.49px;
        flex-grow: 1;
        opacity: 1;
        vertical-align: middle;
      }

      .dxc-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        margin: 0 4px;
      }

      .mat-button-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        & > div:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          align-items: center;
          display: flex;
          width: 100%;
        }
      }
      .icon-after span.mat-button-wrapper > div:first-child {
        display: flex;
        flex-grow: unset;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
      }
      .mat-select-arrow-wrapper {
        display: table-cell;
        vertical-align: middle;
      }

      .menu-buttom-label-wrapper {
        width: 230px;
        min-height: 46px;
        padding-left: 18px;
        padding-right: 13px;
        border-radius: 2px;
        display: inline-flex;
        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        &.onlyIcon {
          width: unset !important;
          padding: 10px 15px;
        }

        &.menu-opened {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }

        &.label-only-icon {
          width: 115px;
          min-width: unset;
          img {
            margin-right: 0px;
            margin-left: 0px;
          }
        }
      }
      .option.mat-menu-item {
        background-color: #fabada;
      }
    `;
  }
}
