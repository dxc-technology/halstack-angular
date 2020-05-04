import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  ViewChild,
  ContentChildren,
  QueryList,
  SimpleChanges
} from "@angular/core";
import { DxcTabComponent } from "./dxc-tab/dxc-tab.component";
import { MatTab, MatTabGroup } from "@angular/material";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-tabs",
  templateUrl: "./dxc-tabs.component.html",
  styleUrls: [
    "./dxc-tabs.component.scss",
    "./dxc-light-tabs.scss",
    "./dxc-dark-tabs.scss"
  ],
  providers: [CssUtils]
})
export class DxcTabsComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;
  @HostBinding("class.label-icons") allTabWithLabelAndIcon: boolean = false;

  //Default values
  @Input() mode: string = "filled";
  @Input() theme: string = "light";
  @Input() disableRipple: boolean = false;
  @Input() margin: any;

  @Input()
  get activeTabIndex(): number { return this._activeTabIndex; }
  set activeTabIndex(value: number) {
    this._activeTabIndex = coerceNumberProperty(value);
  }
  private _activeTabIndex;
  renderedActiveTabIndex: number;

  @ViewChild(MatTabGroup, { static: true })
  public tabGroup: MatTabGroup;

  @ContentChildren(DxcTabComponent)
  protected tabs: QueryList<DxcTabComponent>;
  defaultInputs = new BehaviorSubject<any>({
    mode: "filled",
    theme: "light",
    disableRipple: false,
    margin: null
  });
  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  
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
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
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
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
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
    this.tabGroup.ngAfterContentInit();
  }

  getDynamicStyle(inputs) {
    return css`
      .mat-tab-group {
        ${this.utils.getMargins(inputs.margin)}
      }
      .mat-tab-list .mat-tab-label {
        height: auto !important;
        max-width: 180px;
        padding-right: 20px;
        padding-left: 20px;
        opacity: 1;
        min-width: 180px;

        .mat-tab-label-content {
          font-size: 16px;
          display: inline-grid;
          text-align: -webkit-center;
          text-transform: uppercase;
          letter-spacing: 1.43px;
          z-index: 1;
          img {
            width: 22px;
            height: 22px;
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
      }
      .filled-tabs {
        .mat-tab-label {
          .dxc-tab-label span:not(.show-dot) {
            letter-spacing: 1.43px;
            opacity: 1;
            white-space: normal;
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
      &.label-icons {
        .mat-tab-list .mat-tab-label {
          height: 76px;
        }
      }
      .underlined-tabs {
        .mat-tab-label:not(.mat-tab-label-active) {
          opacity: 0.5;
        }
      }
    `;
  }
}
