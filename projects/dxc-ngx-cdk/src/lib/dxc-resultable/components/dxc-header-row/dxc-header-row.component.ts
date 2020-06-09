import { Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'th',
  template: `<div ordering="{{isSortable}}" (click)="changeIcon()" id="header-{{columnName}}">{{columnName}} <span id="iconSort-{{columnName}}" *ngIf="isSortable"></span></div>`,
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

  state:string;

  constructor(private sortService: SortService){}

  ngAfterViewInit(){
    this.setIconValues();
    this.setDefaultSort();
    this.setStyle();
  }

  private setState(){
    let divHeader = document.getElementById(`header-${this.columnName}`);
    divHeader.setAttribute("state", this.state);
  }

  private setStyle(){
    if(this.isSortable){
      let divHeader = document.getElementById(`header-${this.columnName}`);
      divHeader.style.cursor = "pointer";
      divHeader.style.width = "fit-content";
    }
  }

  private setDefaultSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      spanIcon.insertAdjacentHTML('beforeend', this.defaultSort);
      this.state = "default";
      this.setState();
    }
  }

  private setIconValues(){
    this.defaultSort = `<svg id="icon_default-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`
    this.ascSort = `<svg id="icon_asc-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
    this.descSort = `<svg id="icon_desc-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }

  private setAscSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      let icon;
      if(this.state === "default"){
        icon = document.getElementById(`icon_default-${this.columnName}`);
      }
      else{
        icon = document.getElementById(`icon_desc-${this.columnName}`);
      }
      spanIcon.removeChild(icon);
      spanIcon.insertAdjacentHTML('beforeend', this.ascSort);
      this.state = "up";
      this.setState();
    }
  }

  private setDescSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      let icon = document.getElementById(`icon_asc-${this.columnName}`);
      spanIcon.removeChild(icon);
      spanIcon.insertAdjacentHTML('beforeend', this.descSort);
      this.state = "down";
      this.setState();
    }
  }

  changeIcon(){
    if(this.isSortable){
      if(this.state === "default" || this.state === "down"){
        this.setAscSort();
      }
      else if (this.state === "up"){
        this.setDescSort();
      }
    }
  }

}
