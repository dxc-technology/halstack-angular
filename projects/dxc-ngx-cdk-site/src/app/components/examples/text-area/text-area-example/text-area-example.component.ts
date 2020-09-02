import { Component, OnInit, Inject } from "@angular/core";
import { ExampleService } from "src/app/service/example.service";
import { Example } from "src/app/model/example";
import { TextAreaDefaultComponent } from "../text-area-default/text-area-default.component";
import { TextAreaUncontrolledComponent } from "../text-area-uncontrolled/text-area-uncontrolled.component";
import { TextAreaFillParentComponent } from "../text-area-fill-parent/text-area-fill-parent.component";
import { TextAreaDisabledComponent } from "../text-area-disabled/text-area-disabled.component";
import { TextAreaInvalidComponent } from "../text-area-invalid/text-area-invalid.component";
import { TextAreaRequiredComponent } from "../text-area-required/text-area-required.component";

@Component({
  selector: "text-area-example",
  templateUrl: "./text-area-example.component.html",
  styleUrls: ["./text-area-example.component.scss"],
})
export class TextAreaExampleComponent implements OnInit {
  examples: Array<Example>;

  constructor(
    @Inject("ExampleService") private exampleService: ExampleService
  ) {
    this.examples = new Array();
  }

  ngOnInit() {
    this.createExamples();
  }
  private createExamples() {
    this.exampleService
      .getCodeExample("text-area/text-area-default/text-area-default.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Controlled Textarea",
            component: TextAreaDefaultComponent,
            selector: "text-area_example_1",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });

    this.exampleService
      .getCodeExample(
        "text-area/text-area-uncontrolled/text-area-uncontrolled.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Uncontrolled Textarea",
            component: TextAreaUncontrolledComponent,
            selector: "text-area_example_2",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });

    this.exampleService
      .getCodeExample(
        "text-area/text-area-fill-parent/text-area-fill-parent.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Fill Parent Textarea",
            component: TextAreaFillParentComponent,
            selector: "text-area_example_3",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });

    this.exampleService
      .getCodeExample(
        "text-area/text-area-disabled/text-area-disabled.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Disabled Textarea",
            component: TextAreaDisabledComponent,
            selector: "text-area_example_4",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });

    this.exampleService
      .getCodeExample("text-area/text-area-invalid/text-area-invalid.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Invalid Textarea",
            component: TextAreaInvalidComponent,
            selector: "text-area_example_5",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });

    this.exampleService
      .getCodeExample(
        "text-area/text-area-required/text-area-required.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Required Textarea",
            component: TextAreaRequiredComponent,
            selector: "text-area_example_6",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
  }
}
