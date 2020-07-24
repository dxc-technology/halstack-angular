import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { AutocompleteAsyncControlledComponent } from '../autocomplete-asynchronous-controlled/autocomplete-asynchronous-controlled.component';
import { AutocompleteAsyncUncontrolledComponent } from '../autocomplete-asynchronous-uncontrolled/autocomplete-asynchronous-uncontrolled.component';
import { AutocompleteDarkComponent } from '../autocomplete-dark/autocomplete-dark.component';
import { AutocompleteSyncControlledComponent } from '../autocomplete-synchronous-controlled/autocomplete-synchronous-controlled.component';
import { AutocompleteSyncUncontrolledComponent } from '../autocomplete-synchronous-uncontrolled/autocomplete-synchronous-uncontrolled.component';

@Component({
  selector: "app-autocomplete-example",
  templateUrl: "./autocomplete-example.component.html",
  styleUrls: ["./autocomplete-example.component.scss"]
})
export class AutocompleteExampleComponent implements OnInit {
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
      .getCodeExample("autocomplete/autocomplete-synchronous-controlled/autocomplete-synchronous-controlled.component")
      .subscribe(resp => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Synchronous Controlled Autocomplete",
            component: AutocompleteSyncControlledComponent,
            selector: "example1",
            examples: [resp[0], resp[1], resp[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("autocomplete/autocomplete-synchronous-uncontrolled/autocomplete-synchronous-uncontrolled.component")
      .subscribe(resp => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Synchronous Uncontrolled Autocomplete",
            component: AutocompleteSyncUncontrolledComponent,
            selector: "example2",
            examples: [resp[0], resp[1], resp[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("autocomplete/autocomplete-asynchronous-controlled/autocomplete-asynchronous-controlled.component")
      .subscribe(resp => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Asynchronous Controlled Autocomplete",
            component: AutocompleteAsyncControlledComponent,
            selector: "example3",
            examples: [resp[0], resp[1], resp[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("autocomplete/autocomplete-asynchronous-uncontrolled/autocomplete-asynchronous-uncontrolled.component")
      .subscribe(resp => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Asynchronous Unontrolled Autocomplete",
            component: AutocompleteAsyncUncontrolledComponent,
            selector: "example4",
            examples: [resp[0], resp[1], resp[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("autocomplete/autocomplete-dark/autocomplete-dark.component")
      .subscribe(resp => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Dark Theme Autocomplete",
            component: AutocompleteDarkComponent,
            selector: "example5",
            examples: [resp[0], resp[1], resp[2]]
          })
        );
      });

  }
}
