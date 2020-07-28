import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {DropdownTablePropertiesComponent } from "../../components/examples/dropdown/properties/dropdown-table-properties.component";
import {DropdownExampleComponent} from '../../components/examples/dropdown/dropwdown-example/dropdown-example.component';
import { DropdownImportComponent } from '../../components/examples/dropdown/dropdown-import/dropdown-import.component';

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
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
        selector: "examples-properties-dates",
        component: DropdownTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "MODULE",
        selector: "dropdown-import",
        component: DropdownImportComponent
      }
      ,
      {
        id: 2,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: DropdownExampleComponent
      }
    );
  }
}
