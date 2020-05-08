import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewChecked,
  ChangeDetectionStrategy
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-dropdown",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dxc-dropdown.component.html",
  styleUrls: [
    "./dxc-dropdown.component.scss",
    "./dxc-light-dropdown.scss",
    "./dxc-dark-dropdown.scss"
  ],
  providers: [CssUtils]
})
export class DxcDropdownComponent implements OnChanges, AfterViewChecked {
  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() public theme: string = "light";
  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public disableRipple: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public optionsIconPosition: string = "before";
  @Input() public mode: string = "basic";
  @Input() public margin: any;
  @Input() public size: any;

  @Input() public showCaret: boolean = true;

  @Input() public iconSrc: string;
  @Input() public label: string = "";
  @Output() public selectOption: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("dropdownButton", { static: true }) dropdownButton;

  menuOptions: string;

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    options: null,
    disableRipple: false,
    name: null,
    iconPosition: "before",
    optionsIconPosition: "before",
    mode: "basic",
    showCaret: true,
    iconSrc: null,
    label: null,
    margin: null,
    padding: null,
    size: "fitContent"
  });

  public onlyHasIcons: boolean;
  public arrowClass: string = "down";
  public menuOpened: string = "closed";

  private width: string = "";
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
  ngAfterViewChecked() {
    if (
      this.dropdownButton &&
      this.dropdownButton._elementRef &&
      this.dropdownButton._elementRef.nativeElement &&
      this.dropdownButton._elementRef.nativeElement.offsetWidth
    ) {
      this.width = this.dropdownButton._elementRef.nativeElement.offsetWidth;

      this.menuOptions = `${this.setDxcMenuOptionsStyle(
        this.defaultInputs.getValue()
      )}`;
      this.menuOptions = `${this.setWidth()}`;
    }
  }
  getStylesForTheme(theme) {
    if (theme === "light") {
      return this.getStylesForLightTheme();
    } else {
      return this.getStylesForDarkTheme();
    }
  }
  getBackgroundColorBaseOnModeAndTheme(theme, mode) {
    let backgroundColor = "";
    let borderColor = "";
    let color = "";
    if (theme === "light" && mode === "outlined") {
      backgroundColor = "var(--white, white)";
      borderColor = "var(--black, black)";
      color = "var(--black, black)";
    } else if (theme === "light" && mode === "basic") {
      backgroundColor = "var(--black, black)";
      borderColor = "var(--white, white)";
      color = "var(--white, white)";
    } else if (theme === "dark" && mode === "outlined") {
      backgroundColor = "var(--black, black)";
      borderColor = "var(--white, white)";
      color = "var(--white, white)";
    } else if (theme === "dark" && mode === "basic") {
      backgroundColor = "var(--white, white)";
      borderColor = "var(--white, white)";
      color = "var(--black, black)";
    } else {
      backgroundColor = "var(--white, white)";
      borderColor = "var(--black, black)";
      color = "var(--black, black)";
    }
    return css`
      margin-top: ${mode === "outlined" ? "-2px" : "2px"};
      .mat-menu-item {
        color: ${color};
        background-color: ${backgroundColor};
        border-color: ${borderColor};
      }
    `;
  }
  getStylesForDarkTheme() {
    return css`
      ${this.getBackgroundColorBaseOnModeAndTheme("dark", this.mode)}

      .mat-menu-item {
        &:hover {
          color: black;
          background: var(--darkWhite, #EEEEEE);
        }
        &:active {
          color: white;
          background: var(--darkGrey, #666666);
        }
      }
    `;
  }

  getStylesForLightTheme() {
    return css`
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      max-width: ${this.width}px;
      border: ${this.mode === 'outlined'? '2px solid': 'none'};
      ${this.getBackgroundColorBaseOnModeAndTheme("light", this.mode)}
      .mat-menu-item {
        &:hover {
          background: var(--darkWhite, #EEEEEE);
          color: var(--black, black);
        }
        &:active {
          background: var(--lightGrey, #D9D9D9);
        }
      }
      &.basic {
        background-color: var(--black, black);
        .mat-menu-content {
          .mat-menu-item {
            color: var(--white, white);
            &:hover {
              background: var(--darkWhite, #EEEEEE);
              color: var(--black, black);
            }
            &:active {
              background: var(--lightGrey, #D9D9D9);
              color: var(--black, black);
            }
          }
        }
      }
    `;
  }
  setWidth() {
    return css`
      .mat-menu-content {
        ${this.getStylesForTheme(this.theme)};
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        width:${this.width}px;

      }
    `;
  }
  setDxcMenuOptionsStyle(inputs: any) {
    return css`
      border: ${this.mode === "outlined" ? "2px solid" : "transparent"};
      border-color: ${this.theme === "dark" ? "white" : "black"};
      .mat-menu-content {
        ${this.getStylesForTheme(this.theme)};
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        width: ${this.width};
        max-width: ${this.width};
      }
      max-width: none;
      ${this.calculateWidth(inputs)};
      min-width: ${this.sizes[inputs.size]};
    `;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if (
      this.dropdownButton &&
      this.dropdownButton._elementRef &&
      this.dropdownButton._elementRef.nativeElement &&
      this.dropdownButton._elementRef.nativeElement.offsetWidth
    ) {
      this.width = this.dropdownButton._elementRef.nativeElement.offsetWidth;
    }

    this.hasOptionsOnlyIcons();
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset"
  };

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

  calculateWidth(inputs) {
    if (inputs.size === undefined || inputs.size === null) {
      return css`
        width: unset;
      `;
    }

    if (inputs.size !== "fitContent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      ${this.calculateWidth(inputs)}
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
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        letter-spacing: 0.49px;
        flex-grow: 1;
        opacity: 1;
        vertical-align: middle;
        ${this.calculateWidth(inputs)}
      }

      .dxc-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        margin: 0 4px;
      }
      .mat-button {
        border: 2px solid black;
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
        ${this.calculateWidth(inputs)}
        min-height: 46px;
        padding-left: 13px;
        padding-right: 13px;
        border-radius: 2px;
        display: inline-flex;
        ${this.utils.getMargins(inputs.margin)}
        &.onlyIcon {
          width: unset !important;
          padding: 10px 15px;
        }

        &.menu-opened {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }

      }
      .option.mat-menu-item {
        background-color: #fabada;
      }
    `;
  }
}
