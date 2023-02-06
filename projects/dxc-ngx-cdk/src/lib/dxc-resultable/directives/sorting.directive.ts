import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  ViewContainerRef,
  Optional,
} from "@angular/core";
import { DxcResultTable } from "../table";

/**
 * Provides a handle for sorting rows using table's headers.
 * @docs-private
 */
@Directive({ selector: "[ordering]" })
export class Ordering {
  //Header sorting state
  state: string;

  //If header is sortable
  @Input("ordering") ordering: string;

  @Input("propertyname") propertyname: string;

  //Parent Resultset table
  parent: DxcResultTable<any>;

  //Click event to change states and icons
  @HostListener("click") click() {
    if (this.ordering === "true") {
      let idHeader = this.elementRef.nativeElement.id; //Example: header-user
      let columnName = idHeader.split("-")[1];
      this.state = this.parent.getMapStateHeaders().get(columnName);
      if (this.state === "default" || this.state === "down") {
        this.state = "up";
        this.parent.getMapStateHeaders().set(columnName, "up");
        this.parent.changeAscIcon(this.elementRef);
      } else if (this.state === "up") {
        this.state = "down";
        this.parent.getMapStateHeaders().set(columnName, "down");
        this.parent.changeDescIcon(this.elementRef);
      }
      let divHeader = document.getElementById(idHeader);
      divHeader.setAttribute("state", this.state);
      this.parent.removeOtherSorts(idHeader); //Remove all header's state different from default state.
      this.parent.sortCells(this.propertyname, this.state); //Sort all data
      this.parent.navigate(1, "first"); //Navegate to first page from paginator
    }
  }

  constructor(
    public elementRef: ElementRef,
    public viewContainerRef: ViewContainerRef
  ) {
    const _injector = this.viewContainerRef.parentInjector;
    const _parent: DxcResultTable<any> =
      _injector.get<DxcResultTable<any>>(DxcResultTable);

    if (_parent) {
      this.parent = _parent;
      //Register directive in the parent
      (this.parent as DxcResultTable<any>).registerOrderingRef(this.elementRef);
    }
  }
}
