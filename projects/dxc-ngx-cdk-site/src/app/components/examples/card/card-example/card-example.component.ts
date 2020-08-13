import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Example } from "src/app/model/example";
import { ExampleService } from "src/app/service/example.service";
import { CardActionComponent } from '../card-action/card-action.component';
import { CardDefaultComponent } from "../card-default/card-default.component";
import { CardLinkedComponent } from '../card-linked/card-linked.component';
@Component({
  selector: "app-card-example",
  templateUrl: "./card-example.component.html",
  styleUrls: ["./card-example.component.scss"]
})
export class CardExampleComponent implements OnInit {
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
      .getCodeExample("card/card-default/card-default.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Default Card",
            component: CardDefaultComponent,
            selector: "example1",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });

    this.exampleService
      .getCodeExample("card/card-linked/card-linked.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Card With Link",
            component: CardLinkedComponent,
            selector: "example4",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
    
      this.exampleService
      .getCodeExample("card/card-action/card-action.component")
      .subscribe(resp1 => {
        this.examples.push(
          this.exampleService.generateExample({
            title: "Card With Action",
            component: CardActionComponent,
            selector: "example5",
            examples: [resp1[0], resp1[1], resp1[2]]
          })
        );
      });
  }
}
