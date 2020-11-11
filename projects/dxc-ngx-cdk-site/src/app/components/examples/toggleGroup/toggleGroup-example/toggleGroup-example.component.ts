import { Component, OnInit, Inject } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { ToggleGroupControlledComponent } from '../toggleGroup-controlled/toggleGroup-controlled.component';
import { ToggleGroupDefaultComponent } from "../toggleGroup-default/toggleGroup-default.component";
import { ToggleGroupDisabledComponent } from '../toggleGroup-disabled/toggleGroup-disabled.component';
import { ToggleGroupMultipleComponent } from '../toggleGroup-multiple/toggleGroup-multiple.component';

@Component({
  selector: "toggleGroup-example",
  templateUrl: "./toggleGroup-example.component.html",
  styleUrls: ["./toggleGroup-example.component.scss"],
})
export class ToggleGroupExampleComponent implements OnInit {
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
      .getCodeExample(
        "toggleGroup/toggleGroup-default/toggleGroup-default.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Basic Toggle Group",
            component: ToggleGroupDefaultComponent,
            selector: "toggleGroup_example_1",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
    this.exampleService
      .getCodeExample(
        "toggleGroup/toggleGroup-multiple/toggleGroup-multiple.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Multiple Toggle Group",
            component: ToggleGroupMultipleComponent,
            selector: "toggleGroup_example_2",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
      this.exampleService
      .getCodeExample(
        "toggleGroup/toggleGroup-controlled/toggleGroup-controlled.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Controlled Toggle Group",
            component: ToggleGroupControlledComponent,
            selector: "toggleGroup_example_3",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
      this.exampleService
      .getCodeExample(
        "toggleGroup/toggleGroup-disabled/toggleGroup-disabled.component"
      )
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Disabled Toggle Group",
            component: ToggleGroupDisabledComponent,
            selector: "toggleGroup_example_4",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
  }
}
