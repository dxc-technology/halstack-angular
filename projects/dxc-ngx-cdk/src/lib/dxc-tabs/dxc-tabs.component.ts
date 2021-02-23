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
import { css } from "emotion";
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
  @HostBinding("class") className;
  @HostBinding("class.label-icons") allTabWithLabelAndIcon: boolean = false;

  //Default values
  @Input() margin: any;
  @Input() iconPosition: string;

  @Input()
  get activeTabIndex(): number {
    return this._activeTabIndex;
  }
  set activeTabIndex(value: number) {
    this._activeTabIndex = coerceNumberProperty(value);
  }
  private _activeTabIndex;
  renderedActiveTabIndex: number;

  @ViewChild(MatRipple) ripple: MatRipple;

  @ViewChild("tabGroup", { static: true })
  public tabGroup: MatTabGroup;

  @ContentChildren(DxcTabComponent)
  protected tabs: QueryList<DxcTabComponent>;
  defaultInputs = new BehaviorSubject<any>({
    margin: null,
    iconPosition: null,
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

  insertUnderline() {
    let tabList = this._element.nativeElement.getElementsByClassName(
      "mat-tab-list"
    )[0];
    tabList.insertAdjacentHTML("beforeend", '<div class="underline"></div>');
  }

  getDynamicStyle(inputs) {
    return css`
      .mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {
        box-shadow: none;
      }
      .mat-tab-list .underline {
        height: 1px;
        width: 100%;
        background-color: var(--tabs-divider);
      }
      .mat-tab-group {
        ${this.utils.getMargins(inputs.margin)}
        .mat-tab-header {
          background-color: white;
        }
      }
      .mat-tab-list .mat-tab-labels {
        justify-content: center;
      }
      .mat-tab-list .mat-tab-label {
        height: auto !important;
        /* max-width: 360px; */
        padding-right: 16px;
        padding-left: 16px;
        opacity: 1 !important;
        /* min-width: 90px; */
        background: var(--tabs-backgroundColor) 0% 0% no-repeat;
        .dxc-tab-label span:not(.show-dot) {
          letter-spacing: 1.43px;
          opacity: 1;
          white-space: normal;
        }
        .dxc-tab-label span {
          color: var(--tabs-fontColor);
          opacity: 1;
        }
        &.cdk-focused {
          outline: -webkit-focus-ring-color auto 1px;
          outline-color: var(--tabs-focusColor);
          background-color: var(--tabs-hoverBackgroundColor) !important;
        }
        dxc-tab-icon {
          fill: var(--tabs-fontColor);
        }
        .mat-ripple-element{
          background-color: var(--tabs-pressedBackgroundColor);
        }
        .mat-tab-label-content {
          font-size: 16px;
          display: inline-grid;
          text-align: -webkit-center;
          text-transform: uppercase;
          letter-spacing: 1.43px;
          z-index: 1;
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
          /* min-width: 90px; */
        }
        .only-icon {
          min-height: 64px;
          .dxc-tab-label {
            margin-top: 4px;
            display: grid;
          }
        }
        &.mat-tab-disabled {
          .dxc-tab-label span {
            color: var(--tabs-disabledFontColor) !important;
          }
          cursor: not-allowed;
          pointer-events: all !important;
        }
        &.mat-tab-label-active {
          /* background-color: var(--tabs-backgroundColor); */
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
      }
      &.label-icons {
        .mat-tab-list .mat-tab-label {
          height: 76px;
        }
      }
    `;
  }
}
