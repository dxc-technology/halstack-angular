import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHTMLPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(code: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustHtml(code);
  }
}
