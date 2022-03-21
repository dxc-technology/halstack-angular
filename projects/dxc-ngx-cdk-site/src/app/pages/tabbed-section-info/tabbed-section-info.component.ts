import { Component, OnInit } from "@angular/core";
import { TabbedSectionExampleComponent } from "../../components/examples/tabbed-section/tabbed-section-example/tabbed-section-example.component";
import { TabbedSectionNotesComponent } from "../../components/examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component";
import { TabbedSectionApiComponent } from "../../components/examples/tabbed-section/tabbed-section-api/tabbed-section-api.component";
import { Section } from "../../model/sections";

@Component({
  selector: "app-tabbed-section-info",
  templateUrl: "./tabbed-section-info.component.html",
  styleUrls: ["./tabbed-section-info.component.scss"],
})
export class TabbedSectionInfoComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor() {
    this.sections = new Array<Section>();
    this.tagImg = "./assets/img/ready.svg";
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "API",
        selector: "tabbed-section-api",
        component: TabbedSectionApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "examples-component-tabbed-section",
        component: TabbedSectionExampleComponent,
      },
      {
        id: 2,
        label: "USAGE NOTES",
        selector: "examples-notes-tabbed-section",
        component: TabbedSectionNotesComponent,
      }
    );
  }
}
