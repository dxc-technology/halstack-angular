import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { TabsDefaultComponent } from "../tabs-default/tabs-default.component";
import { TabsContentComponent } from "../tabs-content/tabs-content.component";
import { TabsUncontrolledComponent } from "../tabs-uncontrolled/tabs-uncontrolled.component";

@Component({
  selector: "app-tabs-example",
  templateUrl: "./tabs-example.component.html",
  styleUrls: ["./tabs-example.component.scss"]
})
export class TabsExampleComponent implements OnInit {
  examples: Array<Example>;

  constructor(
    private cdRef: ChangeDetectorRef,
    @Inject("ExampleService") private exampleService: ExampleService
  ) {
    this.examples = new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  createExamples() {
    this.exampleService
      .getCodeExample("tabs/tabs-default/tabs-default.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Controlled tabs",
            component: TabsDefaultComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("tabs/tabs-uncontrolled/tabs-uncontrolled.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Uncontrolled tabs",
            component: TabsUncontrolledComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("tabs/tabs-content/tabs-content.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Tabs with content",
            component: TabsContentComponent,
            selector: "example5",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
