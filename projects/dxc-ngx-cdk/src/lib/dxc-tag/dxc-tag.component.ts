import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ElementRef,
  ViewChildren,
  QueryList,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { ContentChildren, ChangeDetectorRef } from "@angular/core";
import { DxcTagIconComponent } from "./dxc-tag-icon/dxc-tag-icon.component";

type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
@Component({
  selector: "dxc-tag",
  templateUrl: "./dxc-tag.component.html",
  providers: [CssUtils],
})
export class DxcTagComponent implements OnInit {
  isHovered = false;
  /**
   * Text to be placed next inside the tag.
   */
  @Input() label: string;
  /**
   * @deprecated URL of the icon.
   */
  @Input() iconSrc: string;
  /**
   * Background color of the icon section of the tag.
   */
  @Input() iconBgColor: string = "#5f249f";
  /**
   * Whether the label should appear after or before the icon.
   */
  @Input() labelPosition: "before" | "after" = "after";
  /**
   * If defined, the tag will be displayed as an anchor, using this prop as "href".
   * Component will show some visual feedback on hover.
   */
  @Input() linkHref: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * If true, the page is opened in a new browser tab.
   */
  @Input()
  get newWindow(): boolean {
    return this._newWindow;
  }
  set newWindow(value: boolean) {
    this._newWindow = coerceBooleanProperty(value);
  }
  private _newWindow = false;
  /**
   * Size of the component.
   */
  @Input() size: Size = "fitContent";
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
   * If defined, the tag will be displayed as a button. This function will
   * be called when the user clicks the tag. Component will show some
   * visual feedback on hover.
   */
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  isClickDefined = false;
  shadowDepth: string;

  @HostBinding("class") className;
  @ViewChildren("dxcBox", { read: ElementRef }) dxcBox: QueryList<ElementRef>;
  @ContentChildren(DxcTagIconComponent)
  dxcTagIcon: QueryList<DxcTagIconComponent>;
  @ViewChildren("iconContainer", { read: ElementRef })
  iconContainer: QueryList<ElementRef>;

  defaultInputs = new BehaviorSubject<any>({
    size: "fitContent",
    iconSrc: null,
    iconBgColor: "#5f249f",
    label: false,
    linkHref: null,
    labelPosition: "after",
    margin: null,
    newWindow: false,
    tabIndexValue: 0,
  });
  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.isClickDefined = this.onClick.observers.length > 0;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.shadowDepth = this.getShadowDepth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.shadowDepth = this.getShadowDepth();
  }

  ngAfterViewInit() {
    this.setStyleDxcBox();
    this.setIconDisplay();
    this.cdRef.detectChanges();
  }

  setIconDisplay() {
    if (this.dxcTagIcon.length !== 0) {
      this.iconSrc = "";
    } else if (
      (this.iconSrc === null || this.iconSrc === undefined) &&
      this.dxcTagIcon.length === 0
    ) {
      this.iconContainer.toArray().forEach((el) => {
        (el.nativeElement as HTMLElement).style.display = "none";
      });
    }
  }

  setStyleDxcBox() {
    this.dxcBox.toArray().forEach((el) => {
      if (!this.label && this.size == "small") {
        (el.nativeElement as HTMLElement).style.width =
          "var(--tag-iconSectionWidth)";
      }
    });
  }

  mouseEnter() {
    this.isHovered = true;
    this.shadowDepth = this.getShadowDepth();
  }

  mouseLeave() {
    this.isHovered = false;
    this.shadowDepth = this.getShadowDepth();
  }

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  getShadowDepth(): string {
    return this.isHovered &&
      (this.isClickDefined ||
        (this.linkHref !== null && this.linkHref !== undefined))
      ? "2"
      : "1";
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      ${this.isClickDefined ||
      (this.linkHref !== null && this.linkHref !== undefined)
        ? css`
            cursor: pointer;
          `
        : css`
            cursor: unset;
          `};
      ${this.utils.getMargins(inputs.margin)};
      dxc-box {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border: 0px solid;
      }
      .tagContent {
        display: inline-flex;
        align-items: center;
        height: var(--tag-height);
        ${this.utils.calculateWidth(this.sizes, inputs)};
        ${inputs.labelPosition &&
        inputs.labelPosition != null &&
        inputs.labelPosition === "before"
          ? css`
              flex-direction: row-reverse;
            `
          : css`
              flex-direction: row;
            `};
        .tagLabel {
          padding-top: var(--tag-labelPaddingTop);
          padding-left: var(--tag-labelPaddingLeft);
          padding-bottom: var(--tag-labelPaddingBottom);
          padding-right: var(--tag-labelPaddingRight);
          font-style: var(--tag-fontStyle);
          font-family: var(--tag-fontFamily);
          color: var(--tag-fontColor);
          font-weight: var(--tag-fontWeight);
          font-size: var(--tag-fontSize);
          letter-spacing: 1px;
          flex-grow: 1;
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          display: ${inputs.label ? "inline-flex" : "none"};
        }
        .iconContainer {
          height: 100%;
          display: inline-flex;
          width: var(--tag-iconSectionWidth);
          justify-content: center;
          background: ${inputs.iconBgColor};
          .tagIcon {
            display: flex;
            align-self: center;
            height: var(--tag-iconHeight);
            width: var(--tag-iconWidth);
            fill: var(--tag-iconColor);
          }
          dxc-tag-icon {
            display: flex;
            align-self: center;
            img,
            svg {
              height: var(--tag-iconHeight);
              width: var(--tag-iconWidth);
              fill: var(--tag-iconColor);
            }
          }
        }
      }
      .styledButton {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: 0;
      }
      .styledLink {
        text-decoration: none;
        outline: none;
      }
      button:focus,
      button:focus-visible,
      button:focus-within,
      button:active,
      a:focus,
      a:focus-visible,
      a:focus-within,
      a:active {
        outline: var(--tag-focusColor) auto 2px;
      }
      button:active,
      button:hover,
      a:active,
      a:hover {
        dxc-box {
          box-shadow: 0 8px 14px -2px rgba(0, 0, 0, 0.1);
        }
      }
    `;
  }
}
