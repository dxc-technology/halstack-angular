import {
  Directive,
  HostListener,
  Optional,
  ElementRef,
  ViewContainerRef,
} from "@angular/core";
import { DxcHeaderComponent } from "../dxc-header.component";

@Directive({
  selector: "[isClosable]",
})
export class ClosableDirective {
  parent: DxcHeaderComponent;

  @HostListener("click") click() {
    this.parent.showMenu();
  }

  constructor(
    public elementRef: ElementRef,
    public viewContainerRef: ViewContainerRef,
    @Optional() parent: DxcHeaderComponent
  ) {
    if (parent) {
      this.parent = parent;
    }
  }
}
