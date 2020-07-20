import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SpinnerTablePropertiesComponent } from '../../components/examples/spinner/properties/spinner-table-properties/spinner-table-properties.component';
import { SpinnerExampleComponent } from '../../components/examples/spinner/spinner-example/spinner-example.component';

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
  providers: []
})
export class SpinnerComponent implements OnInit{

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-buttons', component: SpinnerTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: SpinnerExampleComponent}
      );
  }
  
}
