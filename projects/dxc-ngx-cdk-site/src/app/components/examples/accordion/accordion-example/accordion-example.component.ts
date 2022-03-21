import { Component, OnInit, Inject } from "@angular/core";
import { Example } from "../../../../model/example";
import { ExampleService } from "../../../../service/example.service";

@Component({
  selector: "app-accordion-example",
  templateUrl: "./accordion-example.component.html",
  styleUrls: ["./accordion-example.component.scss"],
})
export class AccordionExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
