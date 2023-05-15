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
import { css } from "@emotion/css";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DxcAccordionIconComponent } from "./dxc-accordion-icon/dxc-accordion-icon.component";
import { QueryList, ChangeDetectorRef, ElementRef } from "@angular/core";

@Component({
  selector: "dxc-accordion",
  templateUrl: "./dxc-accordion.component.html",
  providers: [CssUtils],
})
export class DxcAccordionComponent implements OnInit, OnChanges, AfterViewInit {
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
    tabIndexValue: 0
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
      min-width: 160px;
      display: block;
      div.mat-expansion-panel-content {
        div.mat-expansion-panel-body {
          font: normal normal normal 16px/22px var(--fontFamily);
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
      .mat-expansion-panel:not(.mat-expanded)
        .mat-expansion-panel-header:not([aria-disabled="true"]).cdk-keyboard-focused{
        background: transparent !important;
      }
      mat-expansion-panel {
        background-color: var(--accordion-backgroundColor) !important;
        box-shadow: 0px 6px 10px #00000024 !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1607843137254902);
        mat-expansion-panel-header {
          height: 48px;
          font-size: 16px;
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
              width: 20px;
              height: 20px;
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
                width: 20px;
                height: 20px;
              }
            }
          }
          mat-panel-description {
            font: italic normal 300 16px/22px var(--fontFamily);
            justify-content: flex-end;
            margin-right: 24px;
          }
        }
      }
      mat-expansion-panel:not(.disabled) {
        background-color: var(--accordion-backgroundColor) !important;
        mat-expansion-panel-header {
          max-height: 64px;
          background: transparent;
          padding: 0px 16px 0px 16px;
          &:focus {
            outline: -webkit-focus-ring-color auto 1px;
            outline-color: var(--accordion-focusOutline);
          }
          &:hover {
            background-color: var(--accordion-hoverBackgroundColor) !important;
          }
          .caret-indicator {
            transform: rotate(-180deg);
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }
          svg {
            fill: var(--accordion-arrowColor);
          }
          .mat-expansion-panel-header-title,
          .mat-expansion-panel-header-description {
            color: var(--accordion-fontColor);
          }
          &.mat-expanded {
            .caret-indicator {
              transform: rotate(0deg);
              transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            svg {
              display: block;
              fill: var(--accordion-arrowColor);
            }
            border-bottom: 1px solid #00000029;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
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
          padding: 0px 16px 0px 16px;
          svg {
            fill: var(--accordion-disabledFontColor);
          }
        }
      }
    `;
  }
}
