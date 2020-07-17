import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { TableExampleComponent } from '../../components/examples/table/table-example/table-example.component';
import { TablePropertiesComponent } from '../../components/examples/table/properties/table-properties/table-properties.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES', selector: 'examples-properties-table', component: TablePropertiesComponent},
      {id: 1, label: 'EXAMPLES', selector: 'examples-component-table', component: TableExampleComponent}
    );
  }

}
