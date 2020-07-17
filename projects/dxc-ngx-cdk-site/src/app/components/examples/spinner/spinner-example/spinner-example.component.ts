import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { SpinnerSmallComponent } from '../spinner-small/spinner-small.component';
import { SpinnerUndeterminedComponent } from "../spinner-undetermined/spinner-undetermined.component";
import { SpinnerDeterminedComponent } from '../spinner-determined/spinner-determined.component';
import { SpinnerThemedComponent } from '../spinner-themed/spinner-themed.component';
import { SpinnerOverlayComponent } from '../spinner-overlay/spinner-overlay.component';

@Component({
  selector: "app-spinner-example",
  templateUrl: "./spinner-example.component.html",
  styleUrls: ["./spinner-example.component.scss"]
})
export class SpinnerExampleComponent implements OnInit {
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
      .getCodeExample(
        "spinner/spinner-undetermined/spinner-undetermined.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Undetermined Spinner",
            component: SpinnerUndeterminedComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample(
        "spinner/spinner-determined/spinner-determined.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Determined Spinner",
            component: SpinnerDeterminedComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample(
        "spinner/spinner-small/spinner-small.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Small Spinner",
            component: SpinnerSmallComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample(
        "spinner/spinner-themed/spinner-themed.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Themed Spinner",
            component: SpinnerThemedComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample(
        "spinner/spinner-overlay/spinner-overlay.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Spinner with Overlay",
            component: SpinnerOverlayComponent,
            selector: "example5",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
