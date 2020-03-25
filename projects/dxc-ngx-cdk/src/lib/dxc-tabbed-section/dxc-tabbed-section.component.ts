import { Component, OnInit, ViewChild, Input, HostBinding, SimpleChanges } from '@angular/core';
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
  @Input() tabsMode: string;
  @Input() tabsTheme: string;
  @Input() disableTabsRipple: boolean;
  @Input() stickAtPx: number;
  @Input() sections : Array<any>;
  
  @ViewChild(DxcTabsComponent, { static: true })
  public sectionTabGroup: DxcTabsComponent;
  
  tabChange = new EventEmitter();
  selectecTab = 0; 

  styledDxcSectionTabbedGroup:string;
  styledDxcSectionTab: string = css`z-index: 10;`;

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
    this.sectionTabGroup.activeTabIndexChange.subscribe(sectionId => this.selectecTab = sectionId);
    
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
    window.scroll({ top: topOfElement - this.offset, behavior: "smooth" });
  }

  onSectionChange(sectionId: string) {
    if (sectionId !== undefined && sectionId !== null) {
      this.sectionTabGroup.selectedIndex = +sectionId;
    } else {
      this.sectionTabGroup.selectedIndex = 0;
    }
  }

  calculateOffset(stickAtPx: number) {
    this.offset = +stickAtPx + this.TABS_HEIGHT;
  }

  setStyledDxcSectionTabbedGroup(input: any){
    return css`
      .mat-tab-group {
        z-index: 100;
        background: white;
        ${input.stickAtPx ? css`
          position: sticky;
          top: ${+input.stickAtPx}px;` 
        : css``};
      }
      .mat-tab-label {
        background: white;
      }`;
  }
 
}
