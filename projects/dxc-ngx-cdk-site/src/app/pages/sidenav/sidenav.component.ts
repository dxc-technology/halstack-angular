import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import { SidenavExampleComponent } from "../../components/examples/sidenav/sidenav-example/sidenav-example.component";
import { SidenavApiComponent } from "../../components/examples/sidenav/sidenav-api/sidenav-api.component";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
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
        selector: "sidenav-api",
        component: SidenavApiComponent,
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "sidenav-example",
        component: SidenavExampleComponent,
      }
    );
  }
}
