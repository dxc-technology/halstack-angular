import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'th',
  template: `<div ordering="{{isSortable}}" id="header-{{columnName}}">{{columnName}} <span id="iconSort-{{columnName}}" *ngIf="isSortable"></span></div>`,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  providers:[SortService]
})
export class DxcHeaderRowComponent {

  columnName:string;
  isSortable:boolean;

  defaultSort: string;
  ascSort: string;
  descSort: string;

  state: string;

  constructor(private sortService: SortService){}

  ngAfterViewInit(){
    this.setSortIcon();
    this.setStyle();
  }

  /** Set style for sort header */
  private setStyle(){
    if(this.isSortable){
      let divHeader = document.getElementById(`header-${this.columnName}`);
      divHeader.style.cursor = "pointer";
      divHeader.style.width = "fit-content";
    }
  }

  /** Paint icon for sorting depending on header state (up for asc, down for desc and default) */
  setSortIcon(){
    if(this.isSortable){
      let divHeader = document.getElementById(`header-${this.columnName}`);
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      switch(this.state){
        case "up":
          let up = this.sortService.getAscIcon(this.columnName);
          spanIcon.insertAdjacentHTML('beforeend', up);
          divHeader.setAttribute("state",this.state);
          break;
        case "down":
          let down = this.sortService.getDescIcon(this.columnName);
          spanIcon.insertAdjacentHTML('beforeend', down);
          divHeader.setAttribute("state",this.state);
          break;
        default:
          let defaultIcon = this.sortService.getDefaultIcon(this.columnName);
          spanIcon.insertAdjacentHTML('beforeend', defaultIcon);
          divHeader.setAttribute("state",this.state);
          break;
      }
    }
  }

}
