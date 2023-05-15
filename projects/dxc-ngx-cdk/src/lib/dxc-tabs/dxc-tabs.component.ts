import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  ViewChild,
  ContentChildren,
  QueryList,
  SimpleChanges,
} from "@angular/core";
import { DxcTabComponent } from "./dxc-tab/dxc-tab.component";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import { ElementRef, ChangeDetectorRef } from "@angular/core";
import { TabService } from "./services/tab.service";
import {
  MatRipple,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from "@angular/material/core";
import { TabsProperties, Spacing, Space } from "./dxc-tabs.types";

const globalRippleConfig: RippleGlobalOptions = {
  animation: {
    enterDuration: 0,
    exitDuration: 0,
  },
};

@Component({
  selector: "dxc-tabs",
  templateUrl: "./dxc-tabs.component.html",
  styleUrls: ["./dxc-tabs.component.scss"],
  providers: [
    CssUtils,
    TabService,
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
})
export class DxcTabsComponent implements OnChanges {
  /**
   * The index of the active tab.
   */
  @Input()
  get activeTabIndex(): number {
    return this._activeTabIndex;
  }
  set activeTabIndex(value: number) {
    this._activeTabIndex = coerceNumberProperty(value);
  }
  private _activeTabIndex = 0;

  /**
   * Initially active tab, only when it is uncontrolled
   */
  @Input()
  get defaultActiveTabIndex(): number {
    return this._defaultActiveTabIndex;
  }
  set defaultActiveTabIndex(value: number) {
    this._defaultActiveTabIndex = coerceNumberProperty(value);
  }
  private _defaultActiveTabIndex = 0;

  /**
   * Position of icons in tabs.
   */
  @Input() iconPosition: "top" | "left" = "left";

  /**
   * Size of the margin to be applied to the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;

  @HostBinding("class") className;
  @HostBinding("class.label-icons") allTabWithLabelAndIcon: boolean = false;

  renderedActiveTabIndex: number;

  @ViewChild(MatRipple) ripple: MatRipple;

  @ViewChild("tabGroup", { static: true })
  public tabGroup: MatTabGroup;

  @ContentChildren(DxcTabComponent)
  protected tabs: QueryList<DxcTabComponent>;

  defaultInputs = new BehaviorSubject<TabsProperties>({
    activeTabIndex: 0,
    iconPosition: "left",
    margin: null,
  });

  constructor(
    private utils: CssUtils,
    private _element: ElementRef,
    private cdRef: ChangeDetectorRef,
    private service: TabService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.service.iconPosition.next(this.iconPosition || "left");
    this.renderedActiveTabIndex = this.activeTabIndex;
    if (this.tabs && this.tabs.length > 0) {
      this.generateTabs();
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.service.iconPosition.next(this.iconPosition || "left");
    this.activeTabIndex = this.defaultActiveTabIndex
      ? this.defaultActiveTabIndex
      : this.activeTabIndex;
    this.renderedActiveTabIndex = this.activeTabIndex;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onSelectedTabChangeHandler($event) {
    this.setActiveTab();
  }

  public setActiveTab() {
    if (this.activeTabIndex) {
      this.tabGroup.selectedIndex = this.renderedActiveTabIndex;
    }
  }

  public ngAfterViewInit() {
    this.generateTabs();
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.insertUnderline();
    this.cdRef.detectChanges();
    this.setEventListeners();
    this.cdRef.detectChanges();

    this.tabs.changes.subscribe((value) => {
      const matTabsFromQueryList = value.map((tab, index) => {
        if (tab.label && tab.iconSrc) {
          this.allTabWithLabelAndIcon = true;
        }
        tab.id = index;
        return tab.matTab;
      });
      const list = new QueryList<MatTab>();
      list.reset([matTabsFromQueryList]);
      this.tabGroup._tabs = list;
      this.setActiveTab();
      this.cdRef.detectChanges();
    });
  }

  private hasLabelAndIcon() {
    return (
      this.tabs &&
      this.tabs.filter((tab) => tab.label !== null && tab.iconSrc !== null)
        .length > 0
    );
  }

  private generateTabs() {
    const matTabsFromQueryList = this.tabs.map((tab, index) => {
      if (tab.label && tab.iconSrc) {
        this.allTabWithLabelAndIcon = true;
      }
      tab.id = index;
      return tab.matTab;
    });
    const list = new QueryList<MatTab>();
    list.reset([matTabsFromQueryList]);
    this.tabGroup._tabs = list;
    this.setActiveTab();
  }

  setEventListeners() {
    let tabLabels =
      this._element.nativeElement.getElementsByClassName("mat-mdc-tab");
    if (tabLabels?.length > 0) {
      this.tabs.map((tab, index) => {
        tabLabels[index].addEventListener("click", function () {
          tab.onClickHandler();
        });
        tabLabels[index].addEventListener("mouseenter", function () {
          tab.onHoverHandler();
        });
        tabLabels[index].addEventListener("keydown", function (e) {
          if(e.keyCode === 13 || e.keyCode === 32)
            tab.onClickHandler()
        });
      });
    }
  }

  insertUnderline() {
    let tabList =
      this._element.nativeElement.getElementsByClassName("mat-mdc-tab-list")[0];
    tabList.insertAdjacentHTML("beforeend", '<div class="underline"></div>');
  }

  getDynamicStyle(inputs) {
    return css`
      .mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {
        box-shadow: none;
      }
      .mat-mdc-tab-list .mdc-tab-indicator .mdc-tab-indicator__content--underline{
        border-width: var(--tabs-dividerThickness, 2px);
        width: 100%;
        border-color: var(--tabs-dividerColor);
        border-style: solid
      }
      .mat-mdc-tab-group{
        position: relative;
        display: flex;
        flex-direction: column;
        ${this.utils.getMargins(inputs.margin)}
        .mat-mdc-tab-header {
          background-color: white;
          border-bottom: 1px solid var(--mat-tab-header-color)
        }
        .mat-ink-bar {
          background-color: var(--tabs-selectedUnderlineColor);
          height: var(--tabs-selectedUnderlineThickness);
        }
      }
      .mat-mdc-tab-list .mat-mdc-tab-labels {
        height: ${this.getTabHeight()} !important;
        padding-right: 16px;
        padding-left: 16px;
        min-width: 90px;
        max-width: fit-content;
        text-transform: var(--tabs-fontTextTransform) !important;
        opacity: 1 !important;
        color: var(--tabs-unselectedFontColor);
        background: var(--tabs-unselectedBackgroundColor) 0% 0% no-repeat;
        .dxc-tab-label span:not(.show-dot) {
          opacity: 1;
          white-space: normal;
        }
        .dxc-tab-label span {
          color: var(--tabs-fontColor);
          opacity: 1;
          font-family: var(--tabs-fontFamily);
          font-size: var(--tabs-fontSize);
          font-style: var(--tabs-fontStyle);
          font-weight: var(--tabs-fontWeight);
        }
        .mat-mdc-tab{
        &.cdk-focused {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--tabs-focusOutline);
          background-color: var(--tabs-hoverBackgroundColor) !important;
          }
          &.mdc-tab--active{
            background-color: var(--tabs-hoverBackgroundColor) !important;
          }
        }
        dxc-tab-icon {
          fill: var(--tabs-fontColor);
        }
        .mat-ripple-element {
          font-weight: var(--tabs-pressedFontWeight) !important;
          background-color: var(--tabs-pressedBackgroundColor);
        }
        .mat-tab-label-content {
          font-size: 16px;
          display: inline-grid;
          text-align: -webkit-center;
          z-index: 1;

          dxc-badge {
            position: absolute;
            top: 12px;
            right: 4px;
          }

          img,
          svg {
            width: 22px;
            height: 22px;
          }
        }
        .icon-left {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          dxc-tab-icon {
            padding-right: 12px;
            align-items: center;
            justify-content: center;
            display: flex;
          }
        }
        .icon-top {
          min-height: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .only-text {
          min-height: 46px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .only-icon {
          min-height: 64px;
          .dxc-tab-label {
            margin-top: 4px;
            display: grid;
          }
        }
        &.mat-tab-label-active {
          background-color: var(--tabs-selectedBackgroundColor);
          opacity: 1 !important;
          .dxc-tab-label span {
            color: var(--tabs-selectedFontColor);
            opacity: 1;
            white-space: normal;
          }
          dxc-tab-icon {
            fill: var(--tabs-selectedIconColor);
          }
        }
        &.mat-tab-disabled {
          .dxc-tab-label span {
            color: var(--tabs-disabledFontColor) !important;
            font-style: var(--tabs-disabledFontStyle);
          }
          dxc-tab-icon {
            fill: var(--tabs-disabledIconColor);
          }
          opacity: 0.5 !important;
          cursor: not-allowed;
          pointer-events: all !important;
        }
      }
      &.label-icons {
        .mat-mdc-tab-list .mat-mdc-tab-labels {
          height: 76px;
        }
      }
    `;
  }

  getTabHeight() {
    return (
      ((!this.hasLabelAndIcon ||
        (this.hasLabelAndIcon &&
          this.defaultInputs.value.iconPosition !== "top")) &&
        "48px") ||
      "72px"
    );
  }
}
