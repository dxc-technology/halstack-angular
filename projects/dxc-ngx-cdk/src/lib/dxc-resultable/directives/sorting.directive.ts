import { Directive, Input, HostListener, ElementRef, ViewContainerRef, Optional } from '@angular/core';
import { DxcResultTable } from '../table';

/**
 * Provides a handle for sorting rows using table's headers.
 * @docs-private
 */
@Directive({selector: '[ordering]'})
export class Ordering {
  //Header sorting state  
  state:string;

  //If header is sortable
  @Input('ordering') ordering: string;

  //Parent Resultset table
  parent: DxcResultTable<any>;

  //Click event to change states and icons
  @HostListener('click') click() {
    if(this.ordering === "true"){
      let idHeader = this.elementRef.nativeElement.id; //Example: header-user
      let columnName = idHeader.split("-")[1]; 
      this.state = this.parent.getMapStateHeaders().get(columnName);
      if(this.state === "default" || this.state === "down"){
        this.state = "up";
        this.parent.getMapStateHeaders().set(columnName,"up");
        this.parent.changeAscIcon(this);
      }
      else if (this.state === "up"){
        this.state = "down";
        this.parent.getMapStateHeaders().set(columnName,"down");
        this.parent.changeDescIcon(this);
      }
      let divHeader = document.getElementById(idHeader);
      divHeader.setAttribute("state",this.state);
      this.parent.removeOtherSorts(idHeader);
      this.parent.sortCells(columnName,this.state);
    }
  }

  constructor(public elementRef: ElementRef,public viewContainerRef: ViewContainerRef,
    @Optional() parent: DxcResultTable<any>) {
    if(parent){
      this.parent = parent;
      //Register directive in the parent
      parent.registerOrderingRef(this);
    }
  }
}