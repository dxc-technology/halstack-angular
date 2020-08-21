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
  ChangeDetectionStrategy,
  Renderer2
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-dropdown",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dxc-dropdown.component.html",
  styleUrls: [
    "./dxc-dropdown.component.scss"
  ],
  providers: [CssUtils],
})
export class DxcDropdownComponent implements OnChanges, AfterViewChecked {
  @HostBinding("class") className;

  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public optionsIconPosition: string = "before";
  @Input() public margin: any;
  @Input() public size: any;
  @Input() public expandOnHover:boolean;
  @Input() public showCaret: boolean = true;

  @Input() public iconSrc: string;
  @Input() public label: string = "";
  @Output() public onSelectOption: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("dropdownButton", { static: true }) dropdownButton;

  menuOptions: string;
  triggerStyles: string;

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
    size: "fitContent",
    expandOnHover:false
  });

  public onlyHasIcons: boolean;
  public arrowClass: string = "down";
  public menuOpened: string = "closed";
  enterButton: boolean = false;
  menuOpen: boolean = false;
  btnTrigger: any;
  private width: string = "";
  constructor(private utils: CssUtils,private ren: Renderer2) {}
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
    }
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

  setDxcMenuOptionsStyle(inputs: any) {
    return css`
      border-color: var(--dropdown-dropdownBackgroundColor);
      margin-top: -2px;
      border-top-left-radius: 0px !important;
      border-top-right-radius: 0px !important;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
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
      ${this.iconPosition === "after"
        ? css`
            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              vertical-align: middle;
            }
          `
        : css`
            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              vertical-align: middle;
            }
          `}

      .mat-menu-content {
        margin-top: "2px";
        .mat-menu-item {
          color: var(--dropdown-dropdownFontColor);
          background-color: var(--dropdown-dropdownBackgroundColor);
          border-color: var(--dropdown-dropdownBackgroundColor);
        }
        .mat-menu-item {
          &:hover {
            color: var(--dropdown-dropdownFontColor);
            background-color: var(--dropdown-hoverBackgroundOption);
            border-color: var(--dropdown-hoverBackgroundOption);
          }
        }
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        width: ${this.width + "px"};
      }
      .mat-menu-item {
        ${this.iconPositionAfter(this.optionsIconPosition === "after")}
        padding-left: 18px;
        padding-right: 13px;
        span {
          text-overflow: ellipsis;
          vertical-align: middle;
          font-size: 16px;
        }
      }
      max-width: none;
    `;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.hasOptionsOnlyIcons();
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

      this.menuOptions = `${this.setDxcMenuOptionsStyle(
        this.defaultInputs.getValue()
      )}`;
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

  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        (option) => option.iconSrc && !option.label
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

  triggerButtonStyles(inputs) {
    return css`
      ${this.calculateWidth(inputs)}
      min-height: 46px;
      padding-left: 13px;
      padding-right: 13px;
      display: inline-flex;
      align-items: center;
      border-radius: 2px;

      &:focus {
        outline: none;
      }

      ${this.label === "" && !this.showCaret
        ? css`
            padding: 10px 15px;
          `
        : ""};
     
      border: none;
      .menu-buttom-label {
        color: var(--dropdown-fontColor);
      }
      .arrow-down {
        border-top: 5px solid var(--dropdown-fontColor);;
      }
      .arrow-up {
        border-bottom: 5px solid var(--dropdown-fontColor);;
      }

      ${this.menuOpened === "opened"
        ? css`
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            background-color: var(--dropdown-hoverBackgroundColor);
          `
        :  css`
            background-color: var(--dropdown-backgroundColor);
      `}
    `;
  }

  updateCss(){
    this.triggerStyles = this.triggerButtonStyles(
      this.defaultInputs.getValue()
    );
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      ${this.calculateWidth(inputs)}
      align-items: center;
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
      img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
      }
    `;
  }
  buttonEnter(trigger) {
    if(this.expandOnHover){
      setTimeout(() => {
        if(this.btnTrigger && this.btnTrigger != trigger){
          this.btnTrigger.closeMenu();
          this.btnTrigger = trigger;
          this.menuOpen = false;
          trigger.openMenu();
        }
        else if (!this.menuOpen) {
          this.enterButton = true;
          this.btnTrigger = trigger
          trigger.openMenu()
        }
        else {
          this.enterButton = true;
          this.btnTrigger = trigger
        }
      })
    }
  }

  buttonLeave(trigger, button) {
    if(this.expandOnHover){
      setTimeout(() => {
        if (this.enterButton && !this.menuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
        } if (!this.menuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
        } else {
          this.enterButton = false;
        }
      }, 100)
    }
  }

  menuenter() {
    if(this.expandOnHover){
      this.menuOpen = true;
    }
  }

  menuLeave(trigger, button) {
    if(this.expandOnHover){
      setTimeout(() => {
        if (!this.enterButton) {
          this.menuOpen = false;
          trigger.closeMenu();
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
          this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
        } else {
          this.menuOpen = false;
        }
      }, 80)
    }
  }
}
