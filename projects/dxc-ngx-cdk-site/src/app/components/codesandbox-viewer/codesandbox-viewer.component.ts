import { Component, OnInit, Input } from "@angular/core";
import { CodesandboxServiceService } from "../../service/codesandbox-service.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "codesandbox-viewer",
  templateUrl: "./codesandbox-viewer.component.html",
  styleUrls: ["./codesandbox-viewer.component.scss"],
})
export class CodesandboxViewer implements OnInit {
  @Input()
  path: string;

  examples;

  subscriptor: any;

  constructor(
    private codesandboxService: CodesandboxServiceService,
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.subscriptor = this.codesandboxService
      .getExamples(this.path)
      .subscribe((resp) => {
        this.examples = resp;
      });
  }

  getMargin(isFirst: boolean) {
    return isFirst ? { bottom: "medium" } : { top: "medium", bottom: "medium" };
  }

  changeVisibility(example) {
    example.visibility = !example.visibility;
    if (example.visibility) {
      const element = document.getElementById(example.iframe.title);
      element.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
      setTimeout(() => {
        window.scroll(0, window.pageYOffset + (element.offsetHeight + 25));
      }, 10);
    }
  }

  OnDestroy() {
    this.subscriptor.unsubscribe();
  }
}
