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
import { ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: "dxc-tabs",
  templateUrl: "./dxc-tabs.component.html",
  styleUrls: ["./dxc-tabs.component.scss"],
  providers: [CssUtils],
})
export class DxcTabsComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.label-icons") allTabWithLabelAndIcon: boolean = false;

  //Default values
  @Input() margin: any;

  @Input()
  get activeTabIndex(): number {
    return this._activeTabIndex;
  }
  set activeTabIndex(value: number) {
    this._activeTabIndex = coerceNumberProperty(value);
  }
  private _activeTabIndex;
  renderedActiveTabIndex: number;

  @ViewChild("tabGroup", { static: true })
  public tabGroup: MatTabGroup;

  @ContentChildren(DxcTabComponent)
  protected tabs: QueryList<DxcTabComponent>;
  defaultInputs = new BehaviorSubject<any>({
    margin: null,
  });

  constructor(private utils: CssUtils, private _element: ElementRef, private cdRef: ChangeDetectorRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
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
      .mat-tab-list .underline {
        height: 2px;
        width: 100%;
        background-color: var(--tabs-underlineColor);
      }
      .mat-tab-group {
        ${this.utils.getMargins(inputs.margin)}
        .mat-tab-header {
          background-color: white;
        }
      }
      .mat-tab-list .mat-tab-label {
        height: auto !important;
        max-width: 180px;
        padding-right: 20px;
        padding-left: 20px;
        opacity: var(--tabs-notSelectedOpacity);
        min-width: 180px;
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
        }
        .mat-tab-label-content {
          font-size: 16px;
          display: inline-grid;
          text-align: -webkit-center;
          text-transform: uppercase;
          letter-spacing: 1.43px;
          z-index: 1;
          dxc-svg {
            width: 22px;
            height: 22px;
            display: flex;
            svg{
              fill: currentColor;
            }
          }
        }
        .icon-text {
          min-height: 78px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .only-text {
          min-height: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 180px;
        }
        .only-icon {
          .dxc-tab-label {
            margin-top: 4px;
            display: grid;
          }
        }

        &.mat-tab-disabled {
          opacity: 0.5 !important;
          cursor: not-allowed;
        }
        &.mat-tab-disabled {
          opacity: var(--tabs-disabled) !important;
          cursor: not-allowed;
          pointer-events: all !important;
        }
        &.mat-tab-label-active {
          background-color: var(--tabs-selectedBackgroundColor);
          opacity: 1 !important;
          .dxc-tab-label span {
            color: var(--tabs-selectedFontColor);
            opacity: 1;
            white-space: normal;
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
