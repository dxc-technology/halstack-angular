import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import {DropdownDefaultComponent} from '../dropdown-default/dropdown-default.component';
import {DropdownOutlinedComponent} from '../dropdown-outlined/dropdown-outlined.component';
import {DropdownIconsComponent} from '../dropdown-icons/dropdown-icons.component';
import {DropdownDarkComponent} from '../dropdown-dark/dropdown-dark.component';
import { DropdownHoverComponent } from '../dropdown-hover/dropdown-hover.component';
@Component({
  selector: "app-dropdown-example",
  templateUrl: "./dropdown-example.component.html",
  styleUrls: ["./dropdown-example.component.scss"]
})
export class DropdownExampleComponent implements OnInit {
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
      .getCodeExample("dropdown/dropdown-default/dropdown-default.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Default dropdown",
            component: DropdownDefaultComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("dropdown/dropdown-hover/dropdown-hover.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Default Dropdown with expand on hover",
            component: DropdownHoverComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("dropdown/dropdown-outlined/dropdown-outlined.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Outlined dropdown",
            component: DropdownOutlinedComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

// Still fix for icons size is needed. Commented till then
      // this.exampleService
      // .getCodeExample("dropdown/dropdown-icons/dropdown-icons.component")
      // .subscribe(resp1 => {
      //   this.examples.push(
      //     this.exampleService.generateExample({
      //       title: "Icons dropdown",
      //       component: DropdownIconsComponent,
      //       selector: "example3",
      //       examples: [resp1[0], resp1[1], resp1[2]]
      //     })
      //   );
      // });

      this.exampleService
      .getCodeExample("dropdown/dropdown-dark/dropdown-dark.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Dark Dropdown",
            component: DropdownDarkComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
