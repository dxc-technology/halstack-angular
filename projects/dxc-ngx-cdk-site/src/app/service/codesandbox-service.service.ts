import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export interface CodesandboxIframe {
  src: SafeResourceUrl;
  title: string;
}

export interface CodeSandboxExample {
  title: string;
  iframe: CodesandboxIframe;
  visibility: boolean;
}

@Injectable({
  providedIn: "root",
})
export class CodesandboxServiceService {
  subscription: Observable<Array<CodeSandboxExample>>;

  constructor(private http: HttpClient, protected _sanitizer: DomSanitizer) {}

  getExamples(examplePathFile: string): Observable<Array<CodeSandboxExample>> {
    return this.http.get(examplePathFile).pipe(
      map((response: any) => {
        let examples: Array<CodeSandboxExample> = [];
        if (response?.data && Array.isArray(response?.data)) {
          examples = response?.data.map((item: any) => ({
            title: item.title,
            iframe: {
              src: this._sanitizer.bypassSecurityTrustResourceUrl(
                item.iframe.src
              ),
              title: item.iframe.title,
            },
            visibility: item.visibility ?? false,
          }));
        }
        return examples;
      })
    );
  }
}
