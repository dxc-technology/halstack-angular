import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { SidenavTablePropertiesComponent } from "../../components/examples/sidenav/properties/sidenav-table-properties/sidenav-table-properties.component";
import { SidenavExampleComponent } from "../../components/examples/sidenav/sidenav-example/sidenav-example.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "PROPERTIES",
        selector: "sidenav-table-properties",
        component: SidenavTablePropertiesComponent
      },
      {
        id: 1,
        label: "EXAMPLES",
        selector: "sidenav-example",
        component: SidenavExampleComponent
      }
    );
  }

}
