import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { BoxExampleComponent } from 'src/app/components/examples/box/box-example/box-example.component';
import { BoxTablePropertiesComponent } from '../../components/examples/box/properties/box-table-properties/box-table-properties.component';

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"],
  providers: []
})
export class BoxComponent implements OnInit{

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-buttons', component: BoxTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: BoxExampleComponent}
      );
  }
  
}
