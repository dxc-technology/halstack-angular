import { Component, Inject, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { AlertExampleComponent } from 'src/app/components/examples/alert/alert-example/alert-example.component';
import { AlertComponentPropertiesComponent } from '../../components/examples/alert/properties/alert-properties/alert-properties.component';

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  providers: []
})
export class AlertComponent implements OnInit{

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-buttons', component: AlertComponentPropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-buttons', component: AlertExampleComponent}
      );
  }
  
}
