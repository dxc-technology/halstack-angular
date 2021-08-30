import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  constructor() { }

  getPlaneText = (html: string) => {
    return this.stripHTMLTags(html);
  };

  private stripHTMLTags(InString) {
    InString = InString.toString().replace(/<br>/g, "\n").replace(/<p>/g, "\n").replace(/<li>/g, "\n").replace(/<BR>/g, " \n").replace(/<\s*[\/]?div>/gi, "\n"); //replace DIV with \n
    var cleanedbuffer = InString.replace(/(<\?[a-z]*(\s[^>]*)?\?(>|$)|<!\[[a-z]*\[|\]\]>|<!DOCTYPE[^>]*?(>|$)|<!--[\s\S]*?(-->|$)|<[a-z?!\/]([a-z0-9_:.])*(\s[^>]*)?(>|$))/gi, '');
    cleanedbuffer = cleanedbuffer.replace(/(&nbsp;)|(&ldquo;)|(&rdquo;)|(&lsquo;)|(&rsquo;)|(&bull;)/gim, ' '); //(&amp;)|//(&quot;)
    cleanedbuffer = cleanedbuffer.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, "''");
    return cleanedbuffer;
  }

}
