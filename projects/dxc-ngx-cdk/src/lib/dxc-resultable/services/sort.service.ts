import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  //Current header that is sorting the list
  activeSortHeaderId:string;

  defaultSort: string;
  ascSort: string;
  descSort: string;

  constructor() { }

  getSortedList(collectionResource,columnName, order){
    return collectionResource.sort(this.compareValues(columnName,order));
  }

  compareValues(key, order) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      let varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      let varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

 removeOtherSortings(id,state){
      let columnName = id.split("-")[1];
      let spanIcon = document.getElementById(`iconSort-${columnName}`);
      let icon;
      if(state === "up"){
        icon = document.getElementById(`icon_asc-${columnName}`);
      }
      else if(state === "down"){
        icon = document.getElementById(`icon_desc-${columnName}`);
      }
      if(icon != undefined){
        spanIcon.removeChild(icon);
        let defaultSort = `<svg id="icon_default-${columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`
        spanIcon.insertAdjacentHTML('beforeend', defaultSort);
        document.getElementById(id).setAttribute("state","default");
      }
  }

  /*private setIconValues(){
    this.defaultSort = `<svg id="icon_default-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`
    this.ascSort = `<svg id="icon_asc-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
    this.descSort = `<svg id="icon_desc-${this.columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }*/

}
