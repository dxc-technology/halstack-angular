import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { css } from "emotion";

@Component({
  selector: 'th',
  template: `<div id="header-{{columnName}}">{{columnName}} <span id="iconSort-{{columnName}}" *ngIf="isSortable"></span></div>`,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DxcHeaderRowComponent {

  columnName:string;
  isSortable:boolean;

  defaultSort: string = `<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`
  ascSort: string = `<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
  descSort: string = `<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;

  constructor(private elRef: ElementRef){}

  ngAfterViewInit(){
    this.setDefaultSort();
    this.setStyle();
  }

  setStyle(){
    if(this.isSortable){
      let divHeader = document.getElementById(`header-${this.columnName}`);
      divHeader.style.cursor = "pointer";
      divHeader.style.width = "fit-content";
    }
  }

  setDefaultSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      spanIcon.insertAdjacentHTML('beforeend', this.defaultSort);
    }
  }

  setAscSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      spanIcon.insertAdjacentHTML('beforeend', this.ascSort);
    }
  }

  setDescSort(){
    if(this.isSortable){
      let spanIcon = document.getElementById(`iconSort-${this.columnName}`);
      spanIcon.insertAdjacentHTML('beforeend', this.descSort);
    }
  }

}
