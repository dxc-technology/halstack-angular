import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { ChipBasicComponent } from "../chip-basic/chip-basic.component";
import { ChipIconComponent } from '../chip-icon/chip-icon.component';

@Component({
  selector: "chip-example",
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
            title: "Default Chip",
            component: ChipBasicComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
    this.exampleService
      .getCodeExample("chip/chip-icon/chip-icon.component")
      .subscribe((resp1) => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Chip with icons",
            component: ChipIconComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]],
          })
        );
      });
  }
}
