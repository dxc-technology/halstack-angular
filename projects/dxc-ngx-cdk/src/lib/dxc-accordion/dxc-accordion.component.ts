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

@Component({
  selector: "dxc-accordion",
  templateUrl: "./dxc-accordion.component.html",
  providers: [CssUtils],
})
export class DxcAccordionComponent implements OnInit, OnChanges, AfterViewInit {
  currentBackgroundColor: string;
  @Input() mode: string;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() assistiveText: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() margin: any;
  @Input() padding: any;
  @Input()
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  set isExpanded(value: boolean) {
    this._isExpanded = coerceBooleanProperty(value);
  }
  private _isExpanded;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @HostBinding("class") className;

  @ViewChild("matExpansionPanel", { static: true }) _matExpansionPanel: any;
  renderedIsExpanded: boolean;

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
    this.currentBackgroundColor = this.cssUtils.readProperty('--accordion-backgroundColor');
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
      min-width: var(--accordion-minWidth);
      display: block;
      color: ${inputs.disabled
        ? "var(--accordion-disabledFontColor)"
        : "var(--accordion-fontColorBase)"};
      div.mat-expansion-panel-content {
        div.mat-expansion-panel-body {
          font-family: var(--accordion-customContentFontFamily);
          font-size: var(--accordion-customContentFontSize);
          font-weight: var(--accordion-customContentFontWeight);
          color: var(--accordion-customContentFontColor);
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
      .mat-accordion .mat-expansion-panel:last-of-type{
        border-bottom-right-radius: var(--accordion-borderRadius);
        border-bottom-left-radius: var(--accordion-borderRadius);
      }
      .mat-accordion .mat-expansion-panel:first-of-type{
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
        color: var(--accordion-fontColorBase);

        mat-expansion-panel-header {
          padding-right: var(--accordion-headerPaddingRight);
          padding-left: var(--accordion-headerPaddingLeft);
          padding-top: var(--accordion-headerPaddingTop);
          padding-bottom: var(--accordion-headerPaddingBottom);
          min-height: var(--accordion-minHeight);
          .mat-expansion-panel-header-title {
            font-family: var(--accordion-titleFontFamily);
            font-size: var(--accordion-titleFontSize);
            font-weight: var(--accordion-titleFontWeight);
            font-style: var(--accordion-titleFontStyle);
            color: var(--accordion-titleFontColor);
            margin-right: var(--accordion-titleMarginRight);
            margin-left: var(--accordion-titleMarginLeft);
            margin-top: var(--accordion-titleMarginTop);
            margin-bottom: var(--accordion-titleMarginBottom);
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
            &.after {
              flex-direction: row;
              .imageIcon,
              dxc-accordion-icon {
                margin-left: 16px;
              }
            }
            &.before {
              flex-direction: row-reverse;
              justify-content: flex-end;
              .imageIcon,
              dxc-accordion-icon {
                margin-right: 16px;
              }
            }
            dxc-accordion-icon {
              display: flex;
              svg,
              img {
                width: 24px;
                height: 24px;
              }
            }
          }
          mat-panel-description {
            justify-content: flex-end;
            margin-right: 24px;
            overflow: hidden;
            font-family: var(--accordion-assistiveTextFontFamily);
            font-size: var(--accordion-assistiveTextFontSize);
            font-weight: var(--accordion-assistiveTextFontWeight);
            font-style: var(--accordion-assistiveTextFontStyle);
            color: var(--accordion-assistiveTextFontColor);
            letter-spacing: var(assistiveTextLetterSpacing);
            min-width: var(--accordion-assistiveTextMinWidth);
            margin-right: var(--accordion-assistiveTextMarginRight);
            margin-left: var(--accordion-assistiveTextMarginLeft);
            margin-top: var(--accordion-assistiveTextMarginTop);
            margin-bottom: var(--accordion-assistiveTextMarginBottom);
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
            &:focus {
              outline: -webkit-focus-ring-color
                var(--accordion-headerFocusBorderStyle)
                var(--accordion-headerFocusBorderThickness);
              outline-color: var(--accordion-focusOutline);
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

            svg {
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
        mat-expansion-panel-header {
          .mat-expansion-panel-header-title,
          .mat-expansion-panel-header-description {
            color: var(--accordion-disabledFontColor);
          }
          svg {
            fill: var(--accordion-disabledFontColor);
          }
        }
      }
    `;
  }
}
