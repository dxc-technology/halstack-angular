import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'events';
import { css } from "emotion";
import { DxcTabsComponent } from '../dxc-tabs/dxc-tabs.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dxc-tabbed-section',
  templateUrl: './dxc-tabbed-section.component.html',
  styleUrls: ['./dxc-tabbed-section.component.scss']
})
export class DxcTabbedSectionComponent implements OnInit {

  //input attributes
  @Input() tabsMode: string = "filled";;
  @Input() tabsTheme: string = "light";;
  @Input() disableTabsRipple: boolean = false;
  @Input() stickAtPx: number = 0;
  @Input() sections : Array<any>;
  
  @ViewChild(DxcTabsComponent, { static: true })
  public sectionTabGroup: DxcTabsComponent;
  
  tabChange = new EventEmitter();
  selectecTab = 0; 

  styledDxcSectionTabbedGroup: string;
  
  private TABS_HEIGHT : number = 54;
  offset: number = 0;

  defaultInputs = new BehaviorSubject<any>({
    tabsMode: "filled",
    tabsTheme: "light",
    disableTabsRipple: "false",
    stickAtPx: 0,
  });

  constructor() {     
  }

  ngOnInit() {
    this.styledDxcSectionTabbedGroup = `${this.setStyledDxcSectionTabbedGroup(this.defaultInputs.getValue())}`;
    this.calculateOffset(this.defaultInputs.getValue().stickAtPx);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcSectionTabbedGroup = `${this.setStyledDxcSectionTabbedGroup(this.defaultInputs.getValue())}`;
    this.calculateOffset(this.defaultInputs.getValue().stickAtPx);
  }

  scroll (section) {
    const topOfElement = document.getElementById(section).offsetTop  - 1 ;
    window.scroll({ top: topOfElement - this.offset + 10, behavior: "smooth" });
  }

  onSectionChange(sectionId: string) {
    if (sectionId !== undefined && sectionId !== null) {
      this.sectionTabGroup.activeTabIndex = +sectionId;
    } else {
      this.sectionTabGroup.activeTabIndex = 0;
    }
  }

  calculateOffset(stickAtPx: number) {
    this.offset = +stickAtPx + this.TABS_HEIGHT;
  }

  setStyledDxcSectionTabbedGroup(input: any){
    return css`
     #dxcTabbedSection .mat-tab-group {
        ${input.stickAtPx ? css`
          z-index: 500;
          position: sticky;
          top: ${+input.stickAtPx}px;` 
        : css`
          z-index: 10;
          position: initial;
          top: unset;
        `};
      }`;
  }
 
}