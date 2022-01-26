import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild,
  OnChanges,
  ContentChildren,
  AfterViewInit,
} from "@angular/core";
import { CssUtils } from "../utils";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { DxcAccordionIconComponent } from "./dxc-accordion-icon/dxc-accordion-icon.component";
import { QueryList, ChangeDetectorRef, ElementRef } from "@angular/core";
import { BackgroundProviderComponent } from "../background-provider/background-provider.component";

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

type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-accordion",
  templateUrl: "./dxc-accordion.component.html",
  providers: [CssUtils, BackgroundProviderComponent],
})
export class DxcAccordionComponent implements OnInit, OnChanges, AfterViewInit {
  currentBackgroundColor: string;
  /**
   * The panel label.
   */
  @Input() label: string = "";
  /**
   * @deprecated URL of the icon that will be placed next to panel label.
   */
  @Input() iconSrc: string;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  @Input() assistiveText: string = "";
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
  /**
   * This event will be emitted when the user clicks the accordion to expand or collapse
   * the panel. The new state of the panel will be passed as a parameter.
   */
  @Output() onClick = new EventEmitter<boolean>();
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  @Input() padding: Space | Padding;
  /**
   * Represents the state of the panel. When true, the component will be
   * expanded. If undefined, the component will be uncontrolled and its
   * value will be managed internally by the component.
   */
  @Input()
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  set isExpanded(value: boolean) {
    this._isExpanded = coerceBooleanProperty(value);
  }
  private _isExpanded;
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

  @HostBinding("class") className;

  @ViewChild("matExpansionPanel", { static: true }) _matExpansionPanel: any;
  renderedIsExpanded: boolean;

  /**
   * Element used as the icon that will be placed next to panel label.
   */
  @ContentChildren(DxcAccordionIconComponent)
  dxcAccordionIcon: QueryList<DxcAccordionIconComponent>;

  defaultInputs = new BehaviorSubject<any>({
    margin: null,
    padding: null,
    disabled: false,
    tabIndexValue: 0,
  });

  constructor(
    private cssUtils: CssUtils,
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  getElement() {
    return this.elementRef;
  }

  ngAfterViewInit(): void {
    if (this.dxcAccordionIcon.length !== 0) {
      this.iconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.renderedIsExpanded = this.isExpanded || false;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.renderedIsExpanded = this.isExpanded;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.currentBackgroundColor = this.cssUtils.readProperty(
      "--accordion-backgroundColor"
    );
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
    if (!this.disabled) {
      this.onClick.emit(!this.renderedIsExpanded);
      if (this.isExpanded === undefined || this.isExpanded === null) {
        this.renderedIsExpanded = !this.renderedIsExpanded;
      }
    }
    this.renderedIsExpanded === true
      ? this._matExpansionPanel.open()
      : this._matExpansionPanel.close();
  }

  getDynamicStyle(inputs) {
    return css`
      cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
      ${this.cssUtils.getMargins(inputs.margin)}
      min-width: 280px;
      display: block;
      div.mat-expansion-panel-content {
        div.mat-expansion-panel-body {
          cursor: default;
          ${inputs.padding
            ? this.cssUtils.getPaddings(inputs.padding)
            : `padding:0px;`}
          margin: 16px 16px 16px 16px;
          dxc-accordion {
            width: 100%;
          }
        }
      }
      .mat-accordion .mat-expansion-panel:last-of-type {
        border-bottom-right-radius: var(--accordion-borderRadius);
        border-bottom-left-radius: var(--accordion-borderRadius);
      }
      .mat-accordion .mat-expansion-panel:first-of-type {
        border-top-right-radius: var(--accordion-borderRadius);
        border-top-left-radius: var(--accordion-borderRadius);
      }

      .mat-expansion-panel:not(.mat-expanded)
        .mat-expansion-panel-header:not([aria-disabled="true"]).cdk-keyboard-focused {
        background: transparent !important;
      }
      .mat-expansion-panel {
        border-radius: var(--accordion-borderRadius);
        background-color: var(--accordion-backgroundColor) !important;
        box-shadow: var(--accordion-boxShadowOffsetX)
          var(--accordion-boxShadowOffsetY) var(--accordion-boxShadowBlur)
          var(--accordion-boxShadowColor) !important;
        mat-expansion-panel-header {
          min-height: 48px;
          padding: 0 16px;
          .mat-expansion-panel-header-title {
            font-family: var(--accordion-titleLabelFontFamily);
            font-size: var(--accordion-titleLabelFontSize);
            font-weight: var(--accordion-titleLabelFontWeight);
            font-style: var(--accordion-titleLabelFontStyle);
            color: var(--accordion-titleLabelFontColor);
            padding-right: var(--accordion-titleLabelPaddingRight);
            padding-left: var(--accordion-titleLabelPaddingLeft);
            padding-top: var(--accordion-titleLabelPaddingTop);
            padding-bottom: var(--accordion-titleLabelPaddingBottom);
          }
          span.mat-expansion-indicator {
            display: none;
          }
          span.mat-content {
            align-items: center;
          }
          mat-panel-title {
            display: flex;
            align-items: center;
            .imageIcon {
              width: 24px;
              height: 24px;
            }
            &.before {
              flex-direction: row-reverse;
              justify-content: flex-end;
              .imageIcon,
              dxc-accordion-icon {
                margin-right: var(--accordion-iconMarginRight);
                margin-left: var(--accordion-iconMarginLeft);
              }
            }
            dxc-accordion-icon {
              display: flex;
              svg,
              img {
                fill: var(--accordion-iconColor);
                color: var(--accordion-iconColor);
                width: var(--accordion-iconSize);
                height: var(--accordion-iconSize);
              }
            }
          }
          mat-panel-description {
            justify-content: flex-end;
            overflow: hidden;
            font-family: var(--accordion-assistiveTextFontFamily);
            font-size: var(--accordion-assistiveTextFontSize);
            font-weight: var(--accordion-assistiveTextFontWeight);
            font-style: var(--accordion-assistiveTextFontStyle);
            color: var(--accordion-assistiveTextFontColor);
            letter-spacing: var(assistiveTextLetterSpacing);
            min-width: var(--accordion-assistiveTextMinWidth);
            padding-right: var(--accordion-assistiveTextPaddingRight);
            padding-left: var(--accordion-assistiveTextPaddingLeft);
            span {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: end;
              width: 100%;
            }
          }
        }
        &:not(.disabled) {
          mat-expansion-panel-header {
            &:focus,
            &:focus-visible {
              outline: -webkit-focus-ring-color
                var(--accordion-focusBorderStyle)
                var(--accordion-focusBorderThickness);
              outline-color: var(--accordion-focusBorderColor);
              outline-offset: var(--accordion-focusBorderOffset);
            }
            &:hover {
              background-color: var(
                --accordion-hoverBackgroundColor
              ) !important;
            }
            .caret-indicator {
              transform: rotate(-180deg);
              transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }

            .caret-indicator svg {
              display: block;
              fill: var(--accordion-arrowColor);
            }

            &.mat-expanded {
              .caret-indicator {
                transform: rotate(0deg);
                transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
              }
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
            }
          }
        }
      }

      mat-expansion-panel.disabled {
        cursor: not-allowed;
        background-color: var(--accordion-disabledBackgroundColor) !important;
        mat-expansion-panel-header {
          .mat-expansion-panel-header-title {
            color: var(--accordion-disabledTitleLabelFontColor);
          }
          dxc-accordion-icon {
            svg,
            img {
              fill: var(--accordion-disabledIconColor);
              color: var(--accordion-disabledIconColor);
            }
          }
          .caret-indicator svg {
            fill: var(--accordion-disabledArrowColor);
          }
          mat-panel-description {
            color: var(--accordion-disabledAssistiveTextFontColor);
          }
        }
      }
    `;
  }
}
