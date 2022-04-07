import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ChangeDetectionStrategy,
  Renderer2,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { ElementRef, HostListener } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DropdownService } from "./services/dropdown.service";
import { DropdownProperties, Space, Spacing } from "./dxc-dropdown.types";

@Component({
  selector: "dxc-dropdown",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dxc-dropdown.component.html",
  styleUrls: ["./dxc-dropdown.component.scss"],
  providers: [CssUtils, DropdownService],
})
export class DxcDropdownComponent implements OnChanges {
  /**
   * In case options include icons, whether the icon should appear after or before the label.
   */
  @Input() optionsIconPosition: "before" | "after" = "before";

  /**
   * Whether the icon should appear after or before the label.
   */
  @Input() iconPosition: "before" | "after" = "before";

  /**
   * Text to be placed when the list of options is not displayed.
   */
  @Input() label: string = "";

  /**
   * Name attribute of the input element.
   */
  @Input() name: string;

  /**
   * Whether the arrow next to the label is displayed or not.
   */
  @Input()
  get caretHidden(): boolean {
    return this._caretHidden;
  }
  set caretHidden(value: boolean) {
    this._caretHidden = coerceBooleanProperty(value);
  }
  private _caretHidden = false;

  /**
   * Size of the margin to be applied to the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;

  /**
   * Size of the component.
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" | "fitContent" =
    "fitContent";

  /**
   * This event will emit in case the selection changes. The value of the selected
   * value will be passed as a parameter.
   */
  @Output() public onSelectOption: EventEmitter<string> =
    new EventEmitter<string>();

  /**
   * Value of the tabindex.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;

  /**
   * If true, the options are showed when the dropdown is hover.
   */
  @Input()
  get expandOnHover(): boolean {
    return this._expandOnHover;
  }
  set expandOnHover(value: boolean) {
    this._expandOnHover = coerceBooleanProperty(value);
  }
  private _expandOnHover = false;

  /**
   * If true, the component will be disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @HostBinding("class") className;

  @ViewChild("dropdownButton", { static: true }) dropdownButton;
  @ViewChild(MatMenuTrigger, { static: false }) menuTrigger: MatMenuTrigger;

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this._element.nativeElement.contains(event.target)) {
      if (this.menuOpened === "opened") {
        this.menuTrigger.closeMenu();
      }
    }
  }

  menuOptions: string;
  triggerStyles: string;

  defaultInputs = new BehaviorSubject<DropdownProperties>({
    optionsIconPosition: "before",
    iconPosition: "before",
    label: null,
    name: null,
    caretHidden: false,
    margin: null,
    size: "fitContent",
    tabIndexValue: 0,
    disabled: false,
    expandOnHover: false,
  });

  public arrowClass: string = "down";
  public menuOpened: string = "closed";
  enterButton: boolean = false;
  menuOpen: boolean = false;
  btnTrigger: any;
  private width: string = "";

  constructor(
    private utils: CssUtils,
    private ren: Renderer2,
    private _element: ElementRef,
    private service: DropdownService
  ) {}
  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }
  ngAfterViewInit() {
    if (
      this.dropdownButton &&
      this.dropdownButton._elementRef &&
      this.dropdownButton._elementRef.nativeElement &&
      this.dropdownButton._elementRef.nativeElement.offsetWidth
    ) {
      this.width = this.dropdownButton._elementRef.nativeElement.offsetWidth;

      this.menuOptions = `${this.setDxcMenuOptionsStyle()}`;
    }

    this.service.selected.subscribe((value) => {
      if (value) {
        this.onSelectOption.emit(value);
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    if (
      this.dropdownButton &&
      this.dropdownButton._elementRef &&
      this.dropdownButton._elementRef.nativeElement &&
      this.dropdownButton._elementRef.nativeElement.offsetWidth
    ) {
      this.width = this.dropdownButton._elementRef.nativeElement.offsetWidth;

      this.menuOptions = `${this.setDxcMenuOptionsStyle()}`;
    }

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.triggerStyles = this.triggerButtonStyles(
      this.defaultInputs.getValue()
    );
  }

  public isMenuOpened() {
    this.arrowClass = this.arrowClass === "down" ? "up" : "down";
    this.menuOpened = this.menuOpened === "opened" ? "closed" : "opened";
  }

  public selectedOption(option: any): void {
    this.onSelectOption.emit(option.value);
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

  updateCss() {
    this.triggerStyles = this.triggerButtonStyles(
      this.defaultInputs.getValue()
    );
    this.menuOpened === "opened" && this.service.focusFirstItem();
  }

  iconPositionAfter(iconPositionAfter) {
    if (iconPositionAfter) {
      return css`
        div {
          display: flex;
          flex-grow: unset;
          width: fit-content;
          flex-direction: row-reverse;
          align-items: center;
        }
      `;
    } else {
      return css`
        div {
          display: flex;
          flex-grow: unset;
          width: fit-content;
          align-items: center;
        }
      `;
    }
  }

  setDxcMenuOptionsStyle() {
    return css`
      border-color: var(--dropdown-borderColor);
      border-radius: var(--dropdown-borderRadius) !important;
      border-width: var(--dropdown-borderThickness);
      border-style: var(--dropdown-borderStyle);
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--dropdown-scrollBarTrackColor);
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--dropdown-scrollBarThumbColor);
        border-radius: 3px;
      }
      img,
      svg {
        width: var(--dropdown-optionIconSize);
        height: var(--dropdown-optionIconSize);
        vertical-align: middle;
        fill: var(--dropdown-optionIconColor);
      }
      ${this.optionsIconPosition === "after"
        ? css`
            dxc-dropdown-icon {
              margin-left: var(--dropdown-optionIconSpacing);
            }
          `
        : css`
            dxc-dropdown-icon {
              margin-right: var(--dropdown-optionIconSpacing);
            }
          `}
      dxc-dropdown-icon {
        img,
        svg {
          fill: var(--dropdown-optionIconColor);
        }
      }
      .mat-menu-content {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        width: ${this.width + "px"};
        .mat-menu-item {
          ${this.iconPositionAfter(this.optionsIconPosition === "after")}
          background-color: var(--dropdown-optionBackgroundColor);
          border-color: var(--dropdown-optionBackgroundColor);
          line-height: 24px;
          height: 36px;
          padding-top: var(--dropdown-optionPaddingTop);
          padding-right: var(--dropdown-optionPaddingRight);
          padding-bottom: var(--dropdown-optionPaddingBottom);
          padding-left: var(--dropdown-optionPaddingLeft);
          span {
            text-overflow: ellipsis;
            vertical-align: middle;
            color: var(--dropdown-optionFontColor);
            font-family: var(--dropdown-optionFontFamily);
            font-size: var(--dropdown-optionFontSize);
            font-style: var(--dropdown-optionFontStyle);
            font-weight: var(--dropdown-optionFontWeight);
          }
          &:hover {
            background-color: var(--dropdown-hoverOptionBackgroundColor);
            border-color: var(--dropdown-hoverOptionBackgroundColor);
          }
          &.cdk-focused {
            outline: -webkit-focus-ring-color auto 2px !important;
            outline-color: var(--dropdown-focusColor) !important;
          }
          &:active {
            background-color: var(--dropdown-activeOptionBackgroundColor);
            border-color: var(--dropdown-activeOptionBackgroundColor);
          }
        }
      }
      max-width: none;
    `;
  }

  triggerButtonStyles(inputs) {
    return css`
      ${this.calculateWidth(inputs)}
      min-height: 40px;
      padding-top: var(--dropdown-buttonPaddingTop);
      padding-right: var(--dropdown-buttonPaddingRight);
      padding-bottom: var(--dropdown-buttonPaddingBottom);
      padding-left: var(--dropdown-buttonPaddingLeft);
      display: inline-flex;
      align-items: center;
      border-color: var(--dropdown-borderColor);
      border-radius: var(--dropdown-borderRadius);
      border-width: var(--dropdown-borderThickness);
      border-style: var(--dropdown-borderStyle);
      background-color: var(--dropdown-buttonBackgroundColor);
      &:hover:not(.mat-button-disabled) {
        cursor: pointer;
        background-color: var(--dropdown-hoverButtonBackgroundColor) !important;
      }
      &:active:not(.mat-button-disabled) {
        background-color: var(
          --dropdown-activeButtonBackgroundColor
        ) !important;
      }
      ${this.label === "" && this.caretHidden
        ? css`
            padding: 10px 15px;
          `
        : ""};
      .menu-buttom-label {
        color: var(--dropdown-buttonFontColor);
        font-family: var(--dropdown-buttonFontFamily);
        font-size: var(--dropdown-buttonFontSize);
        font-style: var(--dropdown-buttonFontStyle);
        font-weight: var(--dropdown-buttonFontWeight);
      }
      .arrow-down {
        border-top: 5px solid var(--dropdown-caretIconColor);
      }
      .arrow-up {
        border-bottom: 5px solid var(--dropdown-caretIconColor);
      }
      &.mat-button-disabled {
        cursor: not-allowed;
        background-color: transparent;
        border-color: var(--dropdown-disabledBorderColor);
        .buttonContent {
          img,
          svg {
            fill: var(--dropdown-disabledColor);
          }
        }
        .menu-buttom-label {
          color: var(--dropdown-disabledColor);
        }
        .arrow-down {
          border-top: 5px solid var(--dropdown-disabledColor);
        }
        .arrow-up {
          border-bottom: 5px solid var(--dropdown-disabledColor);
        }
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      ${this.calculateWidth(inputs)}
      align-items: center;
      opacity: 1;
      .cdk-focused {
        outline: -webkit-focus-ring-color auto 2px !important;
        outline-color: var(--dropdown-focusColor) !important;
      }
      .cdk-keyboard-focused {
        .mat-button-focus-overlay {
          opacity: 0;
        }
      }
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
        margin-left: 7px;
        margin-right: 7px;
        margin-top: 1px;
      }
      .arrow-container {
        margin-left: var(--dropdown-caretIconSpacing);
        width: var(--dropdown-caretIconSize);
        display: flex;
        height: var(--dropdown-caretIconSize);
        align-items: center;
        justify-content: center;
      }
      .buttonContent {
        display: flex;
        flex-grow: unset;
        width: fit-content;
        align-items: center;
        img,
        svg {
          width: var(--dropdown-buttonIconSize);
          height: var(--dropdown-buttonIconSize);
          vertical-align: middle;
          fill: var(--dropdown-buttonIconColor);
        }
      }
      ${this.iconPosition === "after"
        ? css`
            .buttonContent {
              flex-direction: row-reverse;
              dxc-dropdown-icon {
                margin-right: var(--dropdown-buttonIconSpacing);
              }
            }
          `
        : css`
            .buttonContent dxc-dropdown-icon {
              margin-right: var(--dropdown-buttonIconSpacing);
            }
          `}
    `;
  }

  buttonEnter(trigger) {
    if (this.expandOnHover) {
      setTimeout(() => {
        if (this.btnTrigger && this.btnTrigger != trigger) {
          this.btnTrigger.closeMenu();
          this.btnTrigger = trigger;
          this.menuOpen = false;
          trigger.openMenu();
        } else if (!this.menuOpen) {
          this.enterButton = true;
          this.btnTrigger = trigger;
          trigger.openMenu();
        } else {
          this.enterButton = true;
          this.btnTrigger = trigger;
        }
      });
    }
  }

  buttonLeave(trigger, button) {
    if (this.expandOnHover) {
      setTimeout(() => {
        if (this.enterButton && !this.menuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-focused"
          );
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-program-focused"
          );
        }
        if (!this.menuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-focused"
          );
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-program-focused"
          );
        } else {
          this.enterButton = false;
        }
      }, 100);
    }
  }

  menuenter() {
    if (this.expandOnHover) {
      this.menuOpen = true;
    }
  }

  menuLeave(trigger, button) {
    if (this.expandOnHover) {
      setTimeout(() => {
        if (!this.enterButton) {
          this.menuOpen = false;
          trigger.closeMenu();
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-focused"
          );
          this.ren.removeClass(
            button["_elementRef"].nativeElement,
            "cdk-program-focused"
          );
        } else {
          this.menuOpen = false;
        }
      }, 80);
    }
  }
}
