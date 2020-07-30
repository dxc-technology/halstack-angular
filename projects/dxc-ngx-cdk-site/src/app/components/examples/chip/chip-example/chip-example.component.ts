import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { ChipBasicComponent } from "../chip-basic/chip-basic.component";
import { ChipColouredComponent } from "../chip-coloured/chip-coloured.component";
import { ChipBorderComponent } from "../chip-border/chip-border.component";
import { ChipDisabledComponent } from '../chip-disabled/chip-disabled.component';

@Component({
  selector: "app-chip-example",
  templateUrl: "./chip-example.component.html",
  styleUrls: ["./chip-example.component.scss"],
})
export class ChipExampleComponent implements OnInit {
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
      .getCodeExample("chip/chip-basic/chip-basic.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Basic Chip",
            component: ChipBasicComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
    this.exampleService
      .getCodeExample("chip/chip-coloured/chip-coloured.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Chip with background",
            component: ChipColouredComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
    this.exampleService
      .getCodeExample("chip/chip-border/chip-border.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Bordered Chip",
            component: ChipBorderComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
    this.exampleService
      .getCodeExample("chip/chip-disabled/chip-disabled.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Disabled Chip",
            component: ChipDisabledComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
  }
}
