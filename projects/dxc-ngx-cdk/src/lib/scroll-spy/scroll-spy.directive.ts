;import { Directive, Input, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[scroll-spy]',
  host: {'(window:scroll)': 'track($event)'}

})
export class ScrollSpyDirective {

   @Input() public spiedTags = [];
  
   @Output() public sectionChange = new EventEmitter<string>();

  private TABS_HEIGHT : number = 54;
  private HEADER_OFFSET : number = 65;

  private currentSection: string;

  constructor(private _el: ElementRef) {

  }

  track(event: any) {

    let currentSection: string;

      const children = this._el.nativeElement.children;
      const scrollTop = event.target.scrollingElement.scrollTop;
      const parentOffset = event.target.scrollingElement.offsetTop + this.HEADER_OFFSET + this.TABS_HEIGHT + 5;

      for (let i = 0; i < children.length; i++) {
          const element = children[i];
          
          if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
              if ((element.offsetTop - parentOffset) <= scrollTop) {
                currentSection =  element.id;
              } 
          }
      }
      if (currentSection !== this.currentSection && currentSection !== undefined) {
          this.currentSection = currentSection.substr(currentSection.length - 1);
          this.sectionChange.emit(this.currentSection);
      }
  }
}
