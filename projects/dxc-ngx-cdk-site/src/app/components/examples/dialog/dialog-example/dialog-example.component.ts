import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { DialogDefaultComponent } from "../dialog-default/dialog-default.component";
import { DialogModalComponent } from "../dialog-modal/dialog-modal.component";
import { DialogCloseComponent } from "../dialog-close/dialog-close.component";

@Component({
  selector: "app-dialog-example",
  templateUrl: "./dialog-example.component.html",
  styleUrls: ["./dialog-example.component.scss"]
})
export class DialogExampleComponent implements OnInit {
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
      .getCodeExample("dialog/dialog-default/dialog-default.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Default dialog",
            component: DialogDefaultComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("dialog/dialog-modal/dialog-modal.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Modal dialog",
            component: DialogModalComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("dialog/dialog-close/dialog-close.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Close dialog",
            component: DialogCloseComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
