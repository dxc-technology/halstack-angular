import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { AlertChildrenComponent } from '../alert-children/alert-children.component';
import { AlertInfoComponent } from "../alert-info/alert-info.component";
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { AlertSizedComponent } from '../alert-sized/alert-sized.component';
import { AlertSuccessComponent } from "../alert-success/alert-success.component";
import { AlertWarningComponent } from '../alert-warning/alert-warning.component';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { AlertClosableComponent } from '../alert-closable/alert-closable.component';

@Component({
  selector: "app-alert-example",
  templateUrl: "./alert-example.component.html",
  styleUrls: ["./alert-example.component.scss"]
})
export class AlertExampleComponent implements OnInit {
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
      .getCodeExample("alert/alert-info/alert-info.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Alert Info",
            component: AlertInfoComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("alert/alert-success/alert-success.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Succes Alert",
            component: AlertSuccessComponent,
            selector: "example2",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("alert/alert-warning/alert-warning.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Warning Alert",
            component: AlertWarningComponent,
            selector: "example3",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("alert/alert-error/alert-error.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Error Alert",
            component: AlertErrorComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("alert/alert-sized/alert-sized.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Sized Alert",
            component: AlertSizedComponent,
            selector: "example5",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("alert/alert-modal/alert-modal.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Modal Alert",
            component: AlertModalComponent,
            selector: "example6",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("alert/alert-closable/alert-closable.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Closable inline Alert",
            component: AlertClosableComponent,
            selector: "example7",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

      this.exampleService
      .getCodeExample("alert/alert-children/alert-children.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Alert With Children",
            component: AlertChildrenComponent,
            selector: "example8",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
