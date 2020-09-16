import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { ProgressbarDeterminedComponent } from "../progressbar-determined/progressbar-determined.component";
import { ProgressbarUndeterminedComponent } from '../progressbar-undetermined/progressbar-undetermined.component';
import {ProgressbarOverlayComponent} from '../progressbar-overlay/progressbar-overlay.component';

@Component({
  selector: "app-progressbar-example",
  templateUrl: "./progressbar-example.component.html",
  styleUrls: ["./progressbar-example.component.scss"]
})
export class ProgressbarExampleComponent implements OnInit {
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
        "progressbar/progressbar-determined/progressbar-determined.component"
      )
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Determinate default Progress Bar",
            component: ProgressbarDeterminedComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("progressbar/progressbar-undetermined/progressbar-undetermined.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Undeterminate default Progress Bar",
            component: ProgressbarUndeterminedComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("progressbar/progressbar-overlay/progressbar-overlay.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Progress Bar with Overlay",
            component: ProgressbarOverlayComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    }
}
