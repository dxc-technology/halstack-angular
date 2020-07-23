import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { ToggleTablePropertiesComponent } from '../../components/examples/toggle/properties/toggle-table-properties/toggle-table-properties.component';
import { ToggleExampleComponent } from '../../components/examples/toggle/toggle-example/toggle-example.component';
import { ToggleImportComponent } from '../../components/examples/toggle/toggle-import/toggle-import.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-toggle', component: ToggleTablePropertiesComponent},
      {id:1, label: 'MODULE', selector: 'toggle-import', component: ToggleImportComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-toggle', component: ToggleExampleComponent}
    );
  }

}
