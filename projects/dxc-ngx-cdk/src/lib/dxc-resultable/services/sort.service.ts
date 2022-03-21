import { Injectable, ElementRef } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SortService {
  defaultSort: string;
  ascSort: string;
  descSort: string;

  //Map with all header's state
  mapStatesHeaders = new Map();

  constructor() {}

  /** Get sorted list from given list, header's name and type of order ("asc" or "desc"). */
  getSortedList(collectionResource: any[], columnName: string, order: string) {
    return collectionResource.sort(this.compareValues(columnName, order));
  }

  /** Compare values for sorting with given order ("asc" or "desc") and header's name. */
  private compareValues(key: any, order: string) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      let varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      let varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  /** Set to default state the given header id (like "header-user-user"). */
  removeOtherSortings(id: string) {
    let columnName = id.split("-")[1];
    let className = id.split("-")[2];
    let spanIcon = document.getElementById(
      `iconSort-${columnName}-${className}`
    );
    spanIcon.innerHTML = this.getDefaultIcon(columnName);
    this.mapStatesHeaders.set(columnName, "default");
    document.getElementById(id).setAttribute("state", "default");
  }

  /** Set default icon to the header. */
  setDefaultIconSort(el: ElementRef) {
    console.log(el.nativeElement);
    let columnName = el.nativeElement.id;
    el.nativeElement.children[0].innerHTML = this.getDefaultIcon(columnName);
  }

  /** Set asc icon to the header. */
  setAscIconSort(el: ElementRef) {
    let columnName = el.nativeElement.id;
    el.nativeElement.children[0].innerHTML = this.getAscIcon(columnName);
  }
  /** Set desc icon to the header. */
  setDescIconSort(el: ElementRef) {
    let columnName = el.nativeElement.id;
    el.nativeElement.children[0].innerHTML = this.getDescIcon(columnName);
  }

  /** Return default icon for the given header. */
  getDefaultIcon(columnName: string) {
    return `<svg id="icon_default-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`;
  }

  /** Return asc icon for the given header. */
  getAscIcon(columnName: string) {
    return `<svg id="icon_asc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
  }

  /** Return desc icon for the given header. */
  getDescIcon(columnName: string) {
    return `<svg id="icon_desc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }
}
