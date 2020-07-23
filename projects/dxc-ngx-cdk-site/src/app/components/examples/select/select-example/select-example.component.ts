import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { SelectDefaultComponent } from "../select-default/select-default.component";
import { SelectIconsComponent } from "../select-icons/select-icons.component";
import { SelectMultipleComponent } from "../select-multiple/select-multiple.component";
import { SelectSizedComponent } from '../select-sized/select-sized.component';
import { SelectThemedComponent } from '../select-themed/select-themed.component';
import { SelectUncontrolledComponent } from "../select-uncontrolled/select-uncontrolled.component";
import { SelectUncontrolledMultipleComponent } from '../select-uncontrolled-multiple/select-uncontrolled-multiple.component';
import { SelectInvalidComponent } from '../select-invalid/select-invalid.component';

@Component({
  selector: "app-select-example",
  templateUrl: "./select-example.component.html",
  styleUrls: ["./select-example.component.scss"]
})
export class SelectExampleComponent implements OnInit {
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
      .getCodeExample("select/select-default/select-default.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Controlled Select",
            component: SelectDefaultComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
    .getCodeExample("select/select-uncontrolled/select-uncontrolled.component")
    .subscribe(resp1 => {
      this.examples.push(
        this.exampleService.generateExample({
          title: "Uncontrolled Select",
          component: SelectUncontrolledComponent,
          selector: "example2",
          examples: [resp1[0], resp1[1], resp1[2]]
        })
      );
    });

    this.exampleService
      .getCodeExample("select/select-multiple/select-multiple.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Controlled Multiple Select",
            component: SelectMultipleComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("select/select-uncontrolled-multiple/select-uncontrolled-multiple.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Uncontrolled Multiple Select",
            component: SelectUncontrolledMultipleComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("select/select-icons/select-icons.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Select With Icons",
            component: SelectIconsComponent,
            selector: "example5",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("select/select-themed/select-themed.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Select Themed",
            component: SelectThemedComponent,
            selector: "example6",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("select/select-sized/select-sized.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Select Sized",
            component: SelectSizedComponent,
            selector: "example7",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("select/select-invalid/select-invalid.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Select Invalid",
            component: SelectInvalidComponent,
            selector: "example8",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
