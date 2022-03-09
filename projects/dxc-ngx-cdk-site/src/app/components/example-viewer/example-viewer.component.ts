import { Component, OnInit, Input } from "@angular/core";
import { Example } from "../../model/example";

@Component({
  selector: "app-example-viewer",
  templateUrl: "./example-viewer.component.html",
  styleUrls: ["./example-viewer.component.scss"],
})
export class ExampleViewerComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  item: Example;

  visible = false;

  constructor() {}

  ngOnInit() {}

  changeVisibility() {
    this.visible = !this.visible;
    if (this.visible) {
      var element = document.getElementById(this.id);
      element.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
      window.scroll(0, window.pageYOffset + (element.offsetHeight - 200));
    }
  }

  ngAfterViewInit(): void {}
}
