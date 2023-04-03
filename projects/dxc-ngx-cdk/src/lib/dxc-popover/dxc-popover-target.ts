import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: 'dxc-popover-target, [dxcPopoverTarget]',
  exportAs: 'dxcPopoverTarget'
})
export class DxcPopoverTarget { // tslint:disable-line:directive-class-suffix

  constructor(public _elementRef: ElementRef) { }

}
