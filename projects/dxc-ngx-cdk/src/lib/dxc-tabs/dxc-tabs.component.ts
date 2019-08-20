import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  OnInit,
  ViewChild,
  ElementRef,
  ContentChildren,
  QueryList,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { DxcTabComponent } from './dxc-tab/dxc-tab.component';
import { generate } from 'rxjs';
import { MatIcon, MatTab, MatTabGroup } from '@angular/material';

@Component({
  selector: "dxc-tabs",
  templateUrl: "./dxc-tabs.component.html",
  styleUrls: [
    "./dxc-tabs.component.scss",
    "./dxc-light-tabs.scss",
    "./dxc-dark-tabs.scss"
  ]
})
export class DxcTabsComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.label-icons") allTabWithLabelAndIcon: boolean = false;

  //Default values
  @Input() mode: string = "filled";
  @Input() theme: string = "light";
  @Input() disableRipple: boolean = false;
  @Input() showDotIndicator: boolean = false;
  @Input("activeTabIndex") selectedIndex: number = 0;

  @Output() activeTabIndexChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatTabGroup,{static:true})
  public tabGroup: MatTabGroup;

  @ContentChildren(DxcTabComponent)
  protected tabs: QueryList<DxcTabComponent>;
 


  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }
  public activeTabIndexChanged($event): void {
    this.activeTabIndexChange.emit(event);
  }

  public ngAfterViewInit() {
    this.generateTabs();
  }

  private generateTabs() {
    const matTabsFromQueryList = this.tabs.map((tab) => {
      if(tab.label  &&  tab.iconSrc) {
        this.allTabWithLabelAndIcon = true;
      }
      tab.showDotIndicator = this.showDotIndicator;
      return tab.matTab
    } );
    const list = new QueryList<MatTab>();
    list.reset([matTabsFromQueryList]);
    this.tabGroup._tabs = list;
    this.tabGroup.ngAfterContentInit();
  }

 
}
