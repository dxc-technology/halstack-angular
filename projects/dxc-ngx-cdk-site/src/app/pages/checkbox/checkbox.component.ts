import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { CheckboxPropertiesComponent } from '../../components/examples/checkbox/properties/checkbox-properties/checkbox-properties.component';
import { CheckboxExampleComponent } from '../../components/examples/checkbox/checkbox-example/checkbox-example.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() {
    

    this.sections.push( 
      {id: 0, label: 'PROPERTIES',selector: 'examples-properties-checkboxes', component: CheckboxPropertiesComponent}
      ,
      {id: 1,label: 'EXAMPLES', selector: 'examples-component-checkboxes', component: CheckboxExampleComponent}
      );
  }
  
}
