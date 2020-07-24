import { Component, OnInit } from "@angular/core";
import { Section } from "../../model/sections";
import {DialogTablePropertiesComponent} from "../../components/examples/dialog/properties/dialog-table-properties.component";
import {DialogExampleComponent} from "../../components/examples/dialog/dialog-example/dialog-example.component";
import { DialogImportComponent } from '../../components/examples/dialog/dialog-import/dialog-import.component';

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
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
        component: DialogTablePropertiesComponent
      }
      ,
      {
        id: 1,
        label: "MODULE",
        selector: "dialog-import",
        component: DialogImportComponent
      }
      ,
      {
        id: 2,
        label: "EXAMPLES",
        selector: "examples-component-dates",
        component: DialogExampleComponent
      }
    );
  }
}
