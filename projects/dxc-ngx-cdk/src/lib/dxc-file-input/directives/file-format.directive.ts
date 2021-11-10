import { Directive, ElementRef, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[dxcFileFormat]'
})
export class FileFormatDirective {

  @Input() format;

  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: any) {
  }

   ngOnInit(): void {
    let xmlns = "http://www.w3.org/2000/svg";
    const commonPathChild = this.document.createElementNS(xmlns, "path");
    commonPathChild.setAttributeNS(null, 'd', 'M0 0h24v24H0V0z');
    commonPathChild.setAttributeNS(null, 'fill', 'none');
    const child = this.document.createElementNS(xmlns, "path");
    switch (this.categorizeFileFormat(this.format)) {
      case 'image':
        child.setAttributeNS(null, 'd', 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z');
        break;
      case 'video':
        child.setAttributeNS(null, 'd', 'M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z');
        break;
      case 'audio':
        child.setAttributeNS(null, 'd', 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z');
        break;
      default:
        child.setAttributeNS(null, 'd', 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z');
        break;
    }
    this.elementRef.nativeElement.append(commonPathChild);
    this.elementRef.nativeElement.append(child);
   }

   private categorizeFileFormat(fileFormat:string){
    if (fileFormat.includes("image")) {
      return 'image';
    } else if (fileFormat.includes("video")) {
      return 'video';

    } else if (fileFormat.includes("audio")) {
      return 'audio';

    }
    return 'default';
   }
}
