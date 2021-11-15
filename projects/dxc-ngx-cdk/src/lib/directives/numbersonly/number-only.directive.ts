import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    let isAllowDecimal = this._el.nativeElement.getAttribute('allowDecimal');
    isAllowDecimal = (isAllowDecimal === 'true');

    if (isAllowDecimal !== null && !isAllowDecimal) {
      this._el.nativeElement.value = initalValue.replace(/[[+-]?^0-9]*/g, '');
    } else {
      this._el.nativeElement.value = initalValue.replace(/[^0-9\.]/g, '');
    }
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
