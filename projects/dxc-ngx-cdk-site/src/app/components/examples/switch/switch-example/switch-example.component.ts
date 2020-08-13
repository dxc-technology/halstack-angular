import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { SwitchLabelComponent } from '../switch-label/switch-label.component';
import { SwitchThemedComponent } from "../switch-themed/switch-themed.component";
import { SwitchUncontrolledComponent } from '../switch-uncontrolled/switch-uncontrolled.component';
import { SwitchDefaultComponent } from '../switch-default/switch-default.component';

@Component({
  selector: "app-switch-example",
  templateUrl: "./switch-example.component.html",
  styleUrls: ["./switch-example.component.scss"]
})
export class SwitchExampleComponent implements OnInit {
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
    .getCodeExample("switch/switch-default/switch-default.component")
    .subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample({
          title: "Controlled Switch",
          component: SwitchDefaultComponent,
          selector: "example1",
          examples: [resp1[0], resp1[1], resp1[2]]
        })
      );
    });

    this.exampleService
    .getCodeExample("switch/switch-uncontrolled/switch-uncontrolled.component")
    .subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample({
          title: "Uncontrolled Switch",
          component: SwitchUncontrolledComponent,
          selector: "example2",
          examples: [resp1[0], resp1[1], resp1[2]]
        })
      );
    });

    this.exampleService
      .getCodeExample("switch/switch-themed/switch-themed.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Themed Switch",
            component: SwitchThemedComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("switch/switch-label/switch-label.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Label Position Switch",
            component: SwitchLabelComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
